import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cuenta/listar/listar.component';
import { AgregarComponent } from './Cuenta/agregar/agregar.component';
import { EditarComponent } from './Cuenta/editar/editar.component';
import {FormsModule} from "@angular/forms";
import {CuentaServiceService} from "./Service/cuenta-service.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CuentaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
