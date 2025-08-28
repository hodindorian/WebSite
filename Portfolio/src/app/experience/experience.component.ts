import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'EXPERIENCES.EXP1.DATE',
      company: 'EXPERIENCES.EXP1.COMPANY',
      description: 'EXPERIENCES.EXP1.DESCRIPTION',
      tasks: [
        'EXPERIENCES.EXP1.TASKS.1',
        'EXPERIENCES.EXP1.TASKS.2',
        'EXPERIENCES.EXP1.TASKS.3'
      ]
    },
    {
      date: 'EXPERIENCES.EXP2.DATE',
      company: 'EXPERIENCES.EXP2.COMPANY',
      description: 'EXPERIENCES.EXP2.DESCRIPTION',
      tasks: [
        'EXPERIENCES.EXP2.TASKS.1',
        'EXPERIENCES.EXP2.TASKS.2',
        'EXPERIENCES.EXP2.TASKS.3'
      ]
    },
    {
      date: 'EXPERIENCES.EXP3.DATE',
      company: 'EXPERIENCES.EXP3.COMPANY',
      description: 'EXPERIENCES.EXP3.DESCRIPTION',
      tasks: [
        'EXPERIENCES.EXP3.TASKS.1',
        'EXPERIENCES.EXP3.TASKS.2',
        'EXPERIENCES.EXP3.TASKS.3',
        'EXPERIENCES.EXP3.TASKS.4'
      ]
    },
    {
      date: 'EXPERIENCES.EXP4.DATE',
      company: 'EXPERIENCES.EXP4.COMPANY',
      description: 'EXPERIENCES.EXP4.DESCRIPTION',
      tasks: [
        'EXPERIENCES.EXP4.TASKS.1',
        'EXPERIENCES.EXP4.TASKS.2',
        'EXPERIENCES.EXP4.TASKS.3',
        'EXPERIENCES.EXP4.TASKS.4'
      ]
    }
  ];
}
