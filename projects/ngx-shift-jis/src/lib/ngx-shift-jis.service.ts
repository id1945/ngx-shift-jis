/**
 * Author: DaiDH
 * Tel: 0845.882.882
 */
import { Injectable } from '@angular/core';
import * as encoding from 'encoding-japanese';

interface types {
  reg: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgxShiftJisService {

  private types: types[] = [
    { reg: '/\.(txt)$/i', type: 'text/plain;charset=utf-8' },
    { reg: '/\.(csv)$/i', type: 'text/csv;charset=utf-8' },

    { reg: '/\.(doc|dot)$/i', type: 'application/msword' },
    { reg: '/\.(docx)$/i', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
    { reg: '/\.(xls|xlt|xla)$/i', type: 'application/vnd.ms-excel' },

    { reg: '/\.(xlsx)$/i', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    { reg: '/\.(xltx)$/i', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template' },
    { reg: '/\.(xlsm)$/i', type: 'application/vnd.ms-excel.sheet.macroEnabled.12' },
    { reg: '/\.(xltm)$/i', type: 'application/vnd.ms-excel.template.macroEnabled.12' },
    { reg: '/\.(xlam)$/i', type: 'application/vnd.ms-excel.addin.macroEnabled.12' },
    { reg: '/\.(xlsb)$/i', type: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12' },

    { reg: '/\.(ppt|pot|pps|ppa)$/i', type: 'application/vnd.ms-powerpoint' },

    { reg: '/\.(pptx)$/i', type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
    { reg: '/\.(potx)$/i', type: 'application/vnd.openxmlformats-officedocument.presentationml.template' },
    { reg: '/\.(ppsx)$/i', type: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow' },
    { reg: '/\.(ppam)$/i', type: 'application/vnd.ms-powerpoint.addin.macroEnabled.12' },
    { reg: '/\.(pptm)$/i', type: 'application/vnd.ms-powerpoint.presentation.macroEnabled.12' },
    { reg: '/\.(potm)$/i', type: 'application/vnd.ms-powerpoint.template.macroEnabled.12' },
    { reg: '/\.(ppsm)$/i', type: 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12' },

    { reg: '/\.(mdb)$/i', type: 'application/vnd.ms-access' },
  ]

  constructor() { }

  /**
   * encoding-japanese
   * @param content 
   * @param fileName 
   */
  public downloadShiftJIS(content: string = '', fileName: string = ''): void {
    // encoding-japanese
    const str_array = encoding.stringToCode(content);
    const sjis_array = encoding.convert(str_array, "SJIS", "UNICODE");
    const uint8_array = new Uint8Array(sjis_array);
    // Blob
    const blob = new Blob([uint8_array], this.type(fileName));
    // Download
    this.downloadUri(blob, fileName);
  }

  /**
   * Type
   * @param fileName 
   * @return object
   */
  private type(fileName: string): any {
    this.types.forEach((e: types) => {
      if (new RegExp(e.reg).test(fileName)) {
        return { type: e.type };
      }
      return;
    });
  }

  /**
   * Download
   * @param blob 
   * @param fileName 
   */
  private downloadUri(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    // Set
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
