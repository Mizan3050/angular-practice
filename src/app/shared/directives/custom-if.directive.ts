import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
  standalone: true
})
export class CustomIfDirective implements OnInit {

  @Input('appCustomIf') delay: number = 0;
  @Input('appCustomIfElseRender') placeholder: TemplateRef<any> | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef)
    setTimeout(() => {
      this.viewContainer.clear()
      if(this.placeholder){
        this.viewContainer.createEmbeddedView(this.placeholder)
      }
    }, this.delay)
  }
}
