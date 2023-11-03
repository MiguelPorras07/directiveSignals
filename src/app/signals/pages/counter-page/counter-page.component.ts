import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  /* Creación de la primera señal para el contador */
  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() );

  public increaseBy( value: number ) {

    this.counter.update( current => current + value )

  }

}
