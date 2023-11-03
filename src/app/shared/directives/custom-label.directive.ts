import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  /* Para tener control en la directiva del elemento, creamos una propiedad privada:
     se coloca el signo de interrogación ("?") porque en algún momento del tiempo, ese valor podría ser nulo*/
  private htmlElement?: ElementRef<HTMLElement>;

  /* Creacion de referencia para saber cual es el color en todo lugar de la directiva */
  private _color: string = 'red';

  /* Creacion de propiedad "errors", para tener acceso dentro de esa directiva, a esa propiedad */
  private _errors?: ValidationErrors | null;

  /* Para recibir el color dentro de nuestra directiva personalizada */
  /* Para ESTABLECER el color, hay que colocar después de Input la propiedad "set", de modo que quede establecido */
  @Input() set color( value: string) {
    /* cuando el input viene del padre */
    this._color = value;
    /* Se mandará a llamar el método setStyle, cada vez que el estilo o el color cambien */
    this.setStyle();
  }

  /* Creación de un nuevo INPUT para poder recibir a la propiedad _errors */
  @Input() set errors( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('constructor de la directiva')
    // console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva - NgOnInit');
  }

  /* creación de método para cambiar el color del elemento html */
  setStyle(): void {
    if ( !this.htmlElement )return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if ( !this.htmlElement )return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    /* Carpintería para determinar los posibles errores que nuestra etiqueta va a manejar */
    const errors = Object.keys(this._errors);

    if ( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

 // if ( errors.includes('minlength') ) {
 //   this.htmlElement.nativeElement.innerText = 'No ha cumplido el mínimo de caracteres';
 //   return;
 // }
    /* SOLUCIÓN DE FERNANDO */
    if ( errors.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Ha escrito ${current}/${ min } caracteres.`;
      return;
    }

    if ( errors.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'Introduzca una dirección de correo válida';
      return;
    }
  }

}
