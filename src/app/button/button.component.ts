import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() button:EventEmitter<string> = new EventEmitter<string>();

  change():void{
    this.button.emit('click al boton')
  }
}
