import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuenta} from "../Modelo/Cuenta";

@Injectable({
  providedIn: 'root'
})
export class CuentaServiceService {

  constructor(private http:HttpClient) { }

  url = '/back/cuentas';

  getCuentas(){
    return this.http.get<Cuenta[]>(this.url);
  }

  createCuenta(cuenta:Cuenta){
    return this.http.post<Cuenta>(this.url, cuenta);
  }

  getCuentaById(id: number){
    return this.http.get<Cuenta>(this.url + "/" +id);
  }

  updateCuenta(cuenta: Cuenta){
    return this.http.put<Cuenta>(this.url + "/" + cuenta.idCuenta, cuenta);
  }

  deleteCuenta(cuenta: Cuenta){
    return this.http.delete<Cuenta>(this.url+ "/" +cuenta.idCuenta);
  }

  filterCuenta(filtro: number){
    return this.http.get<Cuenta[]>((this.url + "/cuenta?numeroCuenta=" + filtro));
  }

}
