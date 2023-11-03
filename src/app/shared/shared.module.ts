import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';

/* El modulo shared se creó en una carpeta aparte, porque contendrá a la directiva personalizada que se va a poder reutilizar, por lo tanto NO es propia
de la carpeta "products" */

/* Las directivas tienen que ser declaradas en el modulo como si fueran un componente, y si se quieren usar en otros modulos, hay que exportarlas */

@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLabelDirective
  ]
})
export class SharedModule { }

/* Se va a exportar el "SharedModule" dentro del "products.module" para poder utilizar todo lo que ese modulo exporte  */
