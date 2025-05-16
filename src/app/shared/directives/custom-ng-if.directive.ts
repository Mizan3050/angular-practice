import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]',
  standalone: true
})
export class CustomNgIfDirective implements OnInit {

  @Input() set appCustomNgIf(value: boolean) {
    this._appCustomNgIf = value;
    this.updateView();
  }
  private _appCustomNgIf!: boolean;
  get appCustomNgIf() {
    return this._appCustomNgIf;
  }

  @Input('appCustomNgIfOrElse') set elseTemplate(value: TemplateRef<any>) {
    this._elseTemplate = value
  };
  private _elseTemplate!: TemplateRef<any>
  get elseTemplate() {
    return this._elseTemplate;
  }

  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {

  }

  ngOnInit(): void {

  }

  updateView() {
    if (this.appCustomNgIf) {
      this.viewRef.clear();
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
      this.viewRef.createEmbeddedView(this.elseTemplate)
    }
  }
}
