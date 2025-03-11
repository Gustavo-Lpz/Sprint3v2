import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CardComponent } from '../card/card.component';
import { Product } from '../models/Products.models';
import { ButtonComponent } from '../button/button.component';
import { CardsContainerComponent } from '../cards-container/cards-container.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, ButtonComponent, CardsContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
