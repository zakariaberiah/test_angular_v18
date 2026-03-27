import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
@Input() title: string = '2'
@Input() description: string = '3'
@Input() years: string = '4'
@Input() icon: string = 'fa-solid fa-graduation-cap'
}
