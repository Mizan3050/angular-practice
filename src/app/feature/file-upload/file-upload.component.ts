import { Component } from '@angular/core';
import { BehaviorSubject, concatMap, delay, from, of, tap } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  isUploading = false;
  files = new BehaviorSubject<any[]>([]);
  nextBatch = new BehaviorSubject<any[]>([]);

  onDrop(arrayOfFile: any[]) {
    // Append new files to the current queue
    // Start the upload process if not already running
    if (!this.isUploading) {
      this.files.next([...arrayOfFile]);
      this.startUpload();
    } else {
      const nextFiles = Array.from(new Set([...this.nextBatch.getValue(),...arrayOfFile]));
      console.log(nextFiles);
      this.nextBatch.next([...nextFiles, ...arrayOfFile]);
    }
  }

  startUpload() {
    this.isUploading = true;
    from(this.files.getValue()).pipe(
      concatMap((v) => {
        return of(v).pipe(delay(500)).pipe(
          tap(() => console.log('file Uploaded successfully ' + v))
        )
      })
    ).subscribe({
      complete: () => {
        this.files.next([]);
        this.isUploading = false;
        const nextFiles = this.nextBatch.getValue();
        if (nextFiles.length) {
          this.onDrop(nextFiles)
          this.nextBatch.next([]);
        }
      }
    })
  }
}
