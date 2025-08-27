import { Component } from '@angular/core';
import moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: false
})
export class LayoutComponent {
  year = moment().format('YYYY');
  darkMode = false;

  constructor(
    private translate: TranslateService,
    public themeService: ThemeService
  ) {
    const lang = localStorage.getItem('lang') || 'fr';
    this.translate.use(lang);

    this.darkMode = this.themeService.getDarkMode();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.darkMode = this.themeService.getDarkMode();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
