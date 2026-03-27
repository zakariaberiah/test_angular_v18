import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from './core/components/about-component/about-component';
import { ExperinceComponent } from './core/components/experince-component/experince-component';
import { MainContanteComponent } from './core/components/main-contante-component/main-contante-component';
import { NavBarComponenet } from './core/components/nav-bar-componenet/nav-bar-componenet';
import { ServiceComponent } from './core/components/service-component/service-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponenet,AboutComponent,ServiceComponent,ExperinceComponent,MainContanteComponent,TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
