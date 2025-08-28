import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

interface Activity {
  titleKey: string;
  descKey: string;
  alt: string;
}

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss'],
  standalone: false
})
export class PersoComponent implements OnInit {
  darkMode = false;

  activities: Activity[] = [
    {
      titleKey: 'PERSO.PIANO.TITLE',
      descKey: 'PERSO.PIANO.DESC',
      alt: 'Piano'
    },
    {
      titleKey: 'PERSO.CHANT.TITLE',
      descKey: 'PERSO.CHANT.DESC',
      alt: 'Chant'
    },
    {
      titleKey: 'PERSO.BOXE.TITLE',
      descKey: 'PERSO.BOXE.DESC',
      alt: 'Boxe'
    },
    {
      titleKey: 'PERSO.MUSCU.TITLE',
      descKey: 'PERSO.MUSCU.DESC',
      alt: 'Musculation'
    },
    {
      titleKey: 'PERSO.COURSE.TITLE',
      descKey: 'PERSO.COURSE.DESC',
      alt: 'Course à pied'
    },
    {
      titleKey: 'PERSO.CINEMA.TITLE',
      descKey: 'PERSO.CINEMA.DESC',
      alt: 'Cinéma'
    }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe(value => this.darkMode = value);
  }
}
