import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titel-component',
  imports: [],
  templateUrl: './titel-component.html',
  styleUrl: './titel-component.css',
})
export class TitelComponent {
@Input() title: string = '';
}
