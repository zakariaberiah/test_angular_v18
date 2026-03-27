import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../../shared/components/card-component/card-component';
import { TitelComponent } from '../../../shared/components/titel-component/titel-component';
import { ButtonComponent } from './../../../shared/components/button-component/button-component';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [CardComponent, TitelComponent, ButtonComponent, TranslateModule],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css',
})
export class ServiceComponent {
  items = [
    {
      id: 1,
      title: 'SERVICES.CUSTOM.WEB_TITLE',
      icon: 'fa-solid fa-laptop-code',
      description: 'SERVICES.CUSTOM.WEB_DESC'
    },
    {
      id: 2,
      title: 'SERVICES.CUSTOM.FULLSTACK_TITLE',
      icon: 'fa-solid fa-code',
      description: 'SERVICES.CUSTOM.FULLSTACK_DESC'
    },
    {
      id: 3,
      title: 'SERVICES.CUSTOM.SYSTEM_TITLE',
      icon: 'fa-solid fa-server',
      description: 'SERVICES.CUSTOM.SYSTEM_DESC'
    }
  ];
}