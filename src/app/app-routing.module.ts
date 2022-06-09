import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarComponent} from "./Cuenta/listar/listar.component";
import {EditarComponent} from "./Cuenta/editar/editar.component";
import {AgregarComponent} from "./Cuenta/agregar/agregar.component";

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'agregar', component: AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
