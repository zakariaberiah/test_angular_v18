import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../../../shared/components/button-component/button-component';
import { CardProjectComponent } from '../../../shared/components/card-project-component/card-project-component';
import { ThemeService } from '../../services/theme-service';

@Component({
  standalone: true,
  selector: 'app-main-contante-component',
  imports: [ButtonComponent, CardProjectComponent, TranslateModule],
  templateUrl: './main-contante-component.html',
  styleUrls: ['./main-contante-component.css'],
})
export class MainContanteComponent {

  currentLang: string = 'fr'; 

  constructor(public translate: TranslateService,
              private themeService: ThemeService) {
    this.translate.use(this.currentLang);
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  onThemeToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.themeService.setDarkMode(checked);
  }

  downloadCV() {
    const cvPath = this.currentLang === 'en' 
      ? 'assets/cv/Berriah_V_anglais.pdf' 
      : 'assets/cv/Berriah_V_francais.pdf';

    const link = document.createElement('a');
    link.href = cvPath;
    link.download = this.currentLang === 'en' ? 'CV-English.pdf' : 'CV-Francais.pdf';
    link.click();
    link.remove();
  }

  items = [
    { id: 1, label: 'GitHub', icon: 'fa-brands fa-github', type: 'primary', link: 'https://github.com/', target: '_blank', isDisabled: false },
    { id: 2, label: 'LinkedIn', icon: 'fa-brands fa-linkedin', type: 'primary', link: 'https://linkedin.com/', target: '_blank', isDisabled: false },
    { id: 3, label: 'Facebook', icon: 'fa-brands fa-facebook', type: 'primary', link: 'https://facebook.com/', target: '_blank', isDisabled: false },
    { id: 4, label: 'Instagram', icon: 'fa-brands fa-instagram', type: 'primary', link: 'https://instagram.com/', target: '_blank', isDisabled: false },
    { id: 5, label: 'Gmail', icon: 'fa-solid fa-envelope', type: 'primary', link: 'mailto:example@gmail.com', target: '_self', isDisabled: false },
    { id: 6, label: 'Telegram', icon: 'fa-brands fa-telegram', type: 'primary', link: 'https://t.me/', target: '_blank', isDisabled: false }
  ];

  services = [
    { id: 1, domain: "SERVICES.WEB", titel: "SERVICES.SPRING", description: "SERVICES.DESC_WEB", moreInfo: "SERVICES.MORE", archetecture: "Architecture Microservices" },
    { id: 2, domain: "SERVICES.ANGULAR", titel: "SERVICES.ANGULAR", description: "SERVICES.DESC_ANGULAR", moreInfo: "SERVICES.MORE", archetecture: "Architecture SPA" },
    { id: 3, domain: "SERVICES.BACKEND", titel: "SERVICES.BACKEND", description: "SERVICES.DESC_BACKEND", moreInfo: "SERVICES.MORE", archetecture: "Spring Security JWT" },
    { id: 4, domain: "SERVICES.DATABASE", titel: "SERVICES.DATABASE", description: "SERVICES.DESC_DATABASE", moreInfo: "SERVICES.MORE", archetecture: "PostgreSQL / MySQL" },
    { id: 5, domain: "SERVICES.DEVOPS", titel: "SERVICES.DEVOPS", description: "SERVICES.DESC_DEVOPS", moreInfo: "SERVICES.MORE", archetecture: "Docker & CI/CD" }
  ];
}