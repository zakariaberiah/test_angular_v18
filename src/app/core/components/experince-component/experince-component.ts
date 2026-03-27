import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceCard } from '../../../shared/components/experience-card/experience-card';
import { TitelComponent } from '../../../shared/components/titel-component/titel-component';

@Component({
  selector: 'app-experince-component',
  imports: [ExperienceCard,TitelComponent,TranslateModule],
  templateUrl: './experince-component.html',
  styleUrl: './experince-component.css',
})
export class ExperinceComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';
  @Input() years: string = '';
}
