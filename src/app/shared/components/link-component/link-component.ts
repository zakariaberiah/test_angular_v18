import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-component',
  standalone: true,
  templateUrl: './link-component.html',
  styleUrl: './link-component.css',
})
export class LinkComponent {

  @Input() title!: string;
  @Input() sectionId!: string;

  scrollToSection() {
    const element = document.getElementById(this.sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}