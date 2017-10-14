import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if(!value) {
      return null;
    }

    let result: String = value.toLowerCase()
      .split('the')
      .map(v => v.trim())
      .map(v => this.toSentenceCase(v))
      .join(' the ')
      .trim();

    result = this.toSentenceCase(result);

    return result;
  }

  private toSentenceCase(value: String): String {
    return value.charAt(0).toUpperCase() + value.substring(1, value.length);
  }

}
