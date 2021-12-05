
# ngx-shift-jis

This library is built for the purpose of loading files in "shift jis" format.\
This is the [stackblitz](https://stackblitz.com/edit/angular-ngx-shift-jis?file=src/app/app.component.ts).

![Logo](https://raw.githubusercontent.com/id1945/ngx-shift-jis/master/ngx-shift-jis.png)

## Installation
Install `ngx-shift-jis` from `npm`:
```bash
npm install ngx-shift-jis --save
```

Add wanted package to NgModule imports:
```typescript
import { NgxShiftJisModule } from 'ngx-shift-jis';

@NgModule({
    ...
    imports: [
        ...,
        NgxShiftJisModule,
    ]
  ...
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
    this.shiftJis.downloadShiftJIS(content, fileName);
  }
}

```

```html
<button (click)="download()">Download</button>
```

## Support download file formats

|  File format  |
| ------------- |
| text          | 
| csv           |
| word          |
| excel         |
| powerpoint    |

\
Author: `DaiDH`, Tel: `0845882882`
### License

[MIT License](https://github.com/id1945/ngx-shift-jis/blob/master/LICENSE). Copyright (c) 2021 DaiDH