import { Component } from '@angular/core';
import { NgxShiftJisService } from 'ngx-shift-jis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-shift-jis';

  constructor(public shiftJis: NgxShiftJisService) {}

  public download() {
    const content = '説明会内容 1,あああ,いいい 2,ううう,えええ';
    const fileName = 'demo-Shift-JIS.csv';
    const convert = (encoding: any) => {
      const num_array = encoding.stringToCode(content);
      const sjis_array = encoding.convert(num_array, 'SJIS', 'UTF8');
      return sjis_array;
    };
    this.shiftJis.downloadShiftJIS(content, fileName).subscribe(console.log);
    // this.shiftJis.downloadShiftJIS(content, fileName, convert).subscribe(console.log);
  }
}
