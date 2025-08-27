import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  selectedLang = 'fr';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setFallbackLang('fr');
    this.translate.use(this.selectedLang);
  }

  changeLang(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  }
}
