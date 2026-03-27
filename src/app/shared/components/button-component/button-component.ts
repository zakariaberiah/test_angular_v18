import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  template: `
    
    <button mat-button class="btn-style"
  [ngClass]="['app-btn', ...(type ? [type] : [])]"
  [disabled]="isDisabled">

  <i *ngIf="icon"
     [class]="icon"
     [class.disabled-style]="isDisabled"></i>

  <span *ngIf="label"
        class="btn-label"
        [class.disabled-style]="isDisabled">
    {{ label }}
  </span>

</button>
    
    
    
    
    
    
    
    
    
  `,
  styleUrls: ['./button-component.css']
})
export class ButtonComponent {
  @Input() label:string = 'Button';
  @Input() icon:string = '';
  @Input() isDisabled:boolean = false;
  @Input() type? :string;
}


















