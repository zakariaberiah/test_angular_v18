import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-project-component',
  imports: [TranslateModule],
  templateUrl: './card-project-component.html',
  styleUrl: './card-project-component.css',
})
export class CardProjectComponent {
@Input() domain: string = '';
@Input() titel: string = '';
@Input() moreInfo: string = '';
@Input() archetecture: string = '';
@Input() description: string = '';
}
