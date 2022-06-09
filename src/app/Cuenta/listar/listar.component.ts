import { Component, OnInit } from '@angular/core';
import {CuentaServiceService} from "../../Service/cuenta-service.service";
import {Router} from "@angular/router";
import {Cuenta} from "../../Modelo/Cuenta";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [CuentaServiceService]
})
export class ListarComponent implements OnInit {

  cuentas: Cuenta[] = [];
  cuenta: Cuenta = new Cuenta();
  filtro: number = 0;
  constructor(private servicio:CuentaServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.servicio.getCuentas().subscribe(data => {
      this.cuentas = data;
    });
  }

  editar(cuenta: Cuenta){
    localStorage.setItem("id", cuenta.idCuenta.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(cuenta: Cuenta){
    this.servicio.deleteCuenta(cuenta).subscribe(data => {
      this.cuentas = this.cuentas.filter(c => c !== cuenta);
      alert("¡Cuenta eliminada!");
    })
  }

  filtrar(filtro: number){
    this.servicio.filterCuenta(filtro).subscribe(data => {
      this.cuentas = data;
    });
  }

}
