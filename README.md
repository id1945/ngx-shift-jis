
# ngx-shift-jis

This library is built for the purpose of loading files in "shift jis" format.\
This is the [demo](https://stackblitz.com/edit/angular-ngx-shift-jis?file=src/app/app.component.ts).

![Logo](https://raw.githubusercontent.com/id1945/ngx-shift-jis/master/ngx-shift-jis.png)

## Installation
Install `ngx-shift-jis` from `npm`:
```bash
npm install ngx-shift-jis@<version> --save
```

Add wanted package to NgModule imports:
```typescript
import { NgxShiftJisModule } from 'ngx-shift-jis';

@NgModule({
    imports: [
        NgxShiftJisModule,
    ]
})
```

Add component to your page:
```typescript
import { NgxShiftJisService } from 'ngx-shift-jis';

export class AppComponent {

  constructor(public shiftJis: NgxShiftJisService) { }

  public download() {
    const content = '説明会内容 1,あああ,いいい 2,ううう,えええ';
    const fileName = 'demo-Shift-JIS.csv';
    this.shiftJis.downloadShiftJIS(content, fileName).subscribe(console.log);
  }
}
```

```html
<button (click)="download()">Download</button>
```

<details><summary><b>Encoding :hammer_and_wrench:</b></summary>

```typescript
public download() {
  const content = '説明会内容 1,あああ,いいい 2,ううう,えええ';
  const fileName = 'demo-Shift-JIS.csv';
  const convert = (encoding) => {
    const num_array = encoding.stringToCode(content);
    const sjis_array = encoding.convert(num_array, "SJIS", "UTF8");
    return sjis_array;
  }
  this.shiftJis.downloadShiftJIS(content, fileName, convert).subscribe(console.log);
}
// convert(data: IntArrayType, to: Encoding, from?: Encoding)
// Encoding: 'UTF32' | 'UTF16' | 'UTF16BE' | 'UTF16LE' | 'BINARY' | 'ASCII' | 'JIS' | 'UTF8' | 'EUCJP' | 'SJIS' | 'UNICODE' | 'AUTO'
```
</details>


#### Support download file formats

|  File format  |
| ------------- |
| text          | 
| csv           |
| word          |
| excel         |
| powerpoint    |

#### Support versions
  
<table>
  <tr>
    <th colspan="2">Support versions</th>
  </tr>
  <tr>
    <td>Angular 16</td>
    <td>1.1.1</td>
  </tr>
  <tr>
    <td>Angular 6</td>
    <td>1.1.0</td>
  </tr>
</table>

#### Author Information
  
<table>
  <tr>
    <th colspan="2">Author Information</th>
  </tr>
  <tr>
    <td>Author</td>
    <td>DaiDH</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>+84845882882</td>
  </tr>
  <tr>
    <td>Country</td>
    <td>Vietnam</td>
  </tr>
</table>

#### If you want donate for me!

<table>
  <tr>
    <th>Bitcoin</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/id1945/id1945/master/donate-bitcoin.png" width="182px"></td>
  </tr>
</table>

![Vietnam](https://raw.githubusercontent.com/id1945/id1945/master/vietnam.gif)

[MIT License](https://github.com/id1945/ngx-shift-jis/blob/master/LICENSE) Copyright (c) 2021 DaiDH