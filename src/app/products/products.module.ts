/**  1. primero se crea el modulo con angular CLI colocando el nombre del modulo, en este caso "products", se selecciona module y route para que genere
 los archivos 'products.module.ts' y 'products-routing.module.ts', que serán los encargados de agrupar la funcionalidad */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

/* eliminar en las declaraciones el Componente de Producto, en este caso se llama "ProductsComponent", junto con su importación, en la parte superior */

@NgModule({
  declarations: [

    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    /* Como se ocuparán los formularios reactivos, hay que IMPORTAR el "reactiveformsmodule",  */
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
