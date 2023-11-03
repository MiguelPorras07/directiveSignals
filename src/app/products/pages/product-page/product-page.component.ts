/* Creación de componente sin el selector en la parte del decorador "@Component" */

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  /* Creacion de formulario reactivo por medio de inyecciones, aparte del 'constructor' */
  private fb = inject( FormBuilder );

  /* propiedad llamada "color" */

  public color: string = 'green';

  /* Creación del formulario */
  /* Con este campo "name", está conectado el input en el archivo html */

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ] ],
  });

  /* Creación de MÉTODO para el cambio de color */

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }



}
