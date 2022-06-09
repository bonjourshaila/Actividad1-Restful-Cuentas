import { Component, OnInit } from '@angular/core';
import {Cuenta} from "../../Modelo/Cuenta";
import {Router} from "@angular/router";
import {CuentaServiceService} from "../../Service/cuenta-service.service";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cuenta: Cuenta = new Cuenta();


  constructor(private router: Router, private servicio: CuentaServiceService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.servicio.getCuentaById(+id).subscribe(data => {
      this.cuenta = data;
    })
  }

  actualizar(cuenta:Cuenta){
    this.servicio.updateCuenta(cuenta).subscribe(data => {
      alert("¡La cuenta se actualizó con éxito!");
      this.router.navigate(['listar']);
    })
  }

}
