import { Component } from '@angular/core';
import { ThemeService } from '../service/theme.service';

interface Project {
  id: string;
  titleKey: string;
  image: string;
  descriptionKey: string;
  technologiesKey: string;
  yearKey: string;
  noteKey: string;
  extraImages?: string[];
  repoLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false
})
export class ProjectsComponent {
  darkMode = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'dafl',
      titleKey: 'PROJECTS.DAFL.TITLE',
      image: 'assets/img/dafl/dafl.png',
      descriptionKey: 'PROJECTS.DAFL.DESCRIPTION',
      technologiesKey: 'PROJECTS.DAFL.TECHNOLOGIES',
      yearKey: 'PROJECTS.DAFL.YEAR',
      noteKey: 'PROJECTS.DAFL.NOTE',
      extraImages: [
        'assets/img/dafl/dafl_exemple.png',
        'assets/img/dafl/dafl_mcd.png'
      ],
      repoLink: ''
    },
    {
      id: 'temoignages',
      titleKey: 'PROJECTS.TEMOIGNAGES.TITLE',
      image: 'assets/img/temoignage/temoignages.png',
      descriptionKey: 'PROJECTS.TEMOIGNAGES.DESCRIPTION',
      technologiesKey: 'PROJECTS.TEMOIGNAGES.TECHNOLOGIES',
      yearKey: 'PROJECTS.TEMOIGNAGES.YEAR',
      noteKey: 'PROJECTS.TEMOIGNAGES.NOTE',
      extraImages: [
        'assets/img/temoignage/temoignage_usecase.png',
      ],
      repoLink: ''
    },
    {
      id: 'fantomgames',
      titleKey: 'PROJECTS.FANTOM.TITLE',
      image: 'assets/img/fantomgames/fantomgames.png',
      descriptionKey: 'PROJECTS.FANTOM.DESCRIPTION',
      technologiesKey: 'PROJECTS.FANTOM.TECHNOLOGIES',
      yearKey: 'PROJECTS.FANTOM.YEAR',
      noteKey: 'PROJECTS.FANTOM.NOTE',
      extraImages: [
        'assets/img/fantomgames/fantomgames_archi.png',
        'assets/img/fantomgames/fantomgames_vues.png'
      ],
      repoLink: 'https://github.com/hodindorian/FantomGames'
    },
    {
      id: 'iftlz',
      titleKey: 'IFTLZ',
      image: 'assets/img/iftlz/iftlz.png',
      descriptionKey: 'PROJECTS.IFTLZ.DESCRIPTION',
      technologiesKey: 'PROJECTS.IFTLZ.TECHNOLOGIES',
      yearKey: 'PROJECTS.IFTLZ.YEAR',
      noteKey: 'PROJECTS.IFTLZ.NOTE',
      extraImages: [
        'assets/img/iftlz/usecase-iftlz.png',
      ],
      repoLink: 'https://github.com/Projet-ZAPP1/IFTLZ_APP_MOBILE'
    }
  ];

  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe(value => this.darkMode = value);
  }

  openProject(project: Project) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
