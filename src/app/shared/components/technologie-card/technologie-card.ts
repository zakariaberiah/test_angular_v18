import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologie-card',
  imports: [],
  templateUrl: './technologie-card.html',
  styleUrl: './technologie-card.css',
})
export class TechnologieCard {
  @Input() titel: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

}
