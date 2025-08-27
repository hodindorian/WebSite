import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  darkMode$ = this.darkModeSubject.asObservable();

  toggleTheme() {
    const newValue = !this.darkModeSubject.value;
    this.darkModeSubject.next(newValue);
    localStorage.setItem('darkMode', String(newValue));
  }

  setDarkMode(value: boolean) {
    this.darkModeSubject.next(value);
    localStorage.setItem('darkMode', String(value));
  }

  getDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
