import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false
})
export class AboutComponent implements OnInit {
  darkMode = false;
  projectHours = 0;
  languages = 0;
  projects = 0;
  linuxYears = 0;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe(value => this.darkMode = value);
    this.animateCounter('projectHours', 350);
    this.animateCounter('languages', 5);
    this.animateCounter('projects', 4);
    this.animateCounter('linuxYears', 4);
  }

  animateCounter(prop: 'projectHours' | 'languages' | 'projects' | 'linuxYears', end: number) {
    let current = 0;
    const step = Math.ceil(end / 100);
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        this[prop] = end;
        clearInterval(interval);
      } else {
        this[prop] = current;
      }
    }, 20);
  }
}
