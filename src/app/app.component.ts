import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Home Twitter';

  constructor(private matIconReg: MatIconRegistry, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    const url = 'https://fonts.gstatic.com/s/materialiconsoutlined/v77/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2';
    this.matIconReg.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl(url));
    this.matIconReg.setDefaultFontSetClass('material-icons-outlined');
  }

}
