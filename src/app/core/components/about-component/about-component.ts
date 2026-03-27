import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TechnologieCard } from '../../../shared/components/technologie-card/technologie-card';
import { TitelComponent } from '../../../shared/components/titel-component/titel-component';

@Component({
  selector: 'app-about-component',
  imports: [TitelComponent,TechnologieCard ,TranslateModule],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
  technologies = [
  { id:1, title:"TECH.SPRING", icon:"devicon-spring-plain", description:"TECH.DESC_SPRING" },
  { id:2, title:"TECH.JAVA", icon:"devicon-java-plain", description:"TECH.DESC_JAVA" },
  { id:3, title:"TECH.ANGULAR", icon:"devicon-angularjs-plain", description:"TECH.DESC_ANGULAR" },
  { id:4, title:"TECH.TYPESCRIPT", icon:"devicon-typescript-plain", description:"TECH.DESC_TYPESCRIPT" },
  { id:5, title:"TECH.REST", icon:"devicon-openapi-plain", description:"TECH.DESC_REST" },
  { id:6, title:"TECH.MICROSERVICES", icon:"devicon-spring-plain", description:"TECH.DESC_MICROSERVICES" },
  { id:7, title:"TECH.DOCKER", icon:"devicon-docker-plain", description:"TECH.DESC_DOCKER" },
  { id:8, title:"TECH.LINUX", icon:"devicon-linux-plain", description:"TECH.DESC_LINUX" },
  { id:9, title:"TECH.CICD", icon:"devicon-githubactions-plain", description:"TECH.DESC_CICD" },
  { id:10, title:"TECH.UML", icon:"devicon-unifiedmodelinglanguage-plain", description:"TECH.DESC_UML" },
  { id:11, title:"TECH.BPMN", icon:"devicon-openapi-plain", description:"TECH.DESC_BPMN" }
];


}