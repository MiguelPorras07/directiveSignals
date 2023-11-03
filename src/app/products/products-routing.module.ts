import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';

/* Borrar la importación del ProductsComponent */

/* Definición del sistema de rutas para poder llegar a la pantalla "product page works!"  */

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProductPageComponent },
      { path: '**', redirectTo: 'product' },
    ]
  }
];

/* También se elimina el "path" que está configurado por default, dejando el arreglo de Routes vacío. */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
