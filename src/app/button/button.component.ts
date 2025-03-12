import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() button= new EventEmitter<boolean>();

  change(vista:boolean):void{
    this.button.emit(vista)
    console.log("Holi dsde el hijo", vista)
  }
}
