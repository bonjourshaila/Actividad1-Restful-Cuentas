import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {CuentaServiceService} from "../../Service/cuenta-service.service";
import {Cuenta} from "../../Modelo/Cuenta";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private servicio: CuentaServiceService) { }

  ngOnInit(): void {
  }

  cuenta: Cuenta = new Cuenta();

  guardar(cuenta:Cuenta){
    this.servicio.createCuenta(cuenta).subscribe(data => {
      alert("¡La cuenta se agregó con éxito!");
      this.router.navigate(['listar']);
    })
  }

}
