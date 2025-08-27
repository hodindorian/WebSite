import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../service/theme.service';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent implements OnInit{
  darkMode = false;
  skills: Skill[] = [
    { name: 'PHP Slim', level: 70 },
    { name: 'Java', level: 40 },
    { name: 'SpringBoot (Java)', level: 70 },
    { name: 'Flutter', level: 65 },
    { name: 'Dart', level: 70 },
    { name: 'Socket IO (Javascript)', level: 60 },
    { name: 'Networking (Reverse proxy, server management)', level: 70 },
    { name: 'Apache Kafka', level: 65 },
    { name: 'Angular', level: 60 },
    { name: 'NodeJs', level: 50 },
    { name: 'HTML', level: 55 },
    { name: 'CSS', level: 40 },
    { name: 'PHP', level: 60 },
    { name: 'Git', level: 70 },
    { name: 'Agile Method', level: 75 },


  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe(value => this.darkMode = value);
  }
}
