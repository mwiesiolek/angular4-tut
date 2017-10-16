import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  private _format: String;

  constructor(private el: ElementRef) { }

  @HostListener('blur')
  onBlur(): void {
    let value: String = this.el.nativeElement.value;

    if(this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

  @Input('appInputFormat')
  get format(): String {
    return this._format;
  }

  set format(value: String) {
    this._format = value;
  }
}
