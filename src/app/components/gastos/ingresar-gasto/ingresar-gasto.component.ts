import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
nombreGasto: string = '';
cantidad: number = 0;
formularioIncorrecto: boolean = false;
textoIncorrecto: string = ''; 
  constructor(private PresupuestoService: PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto(){

    if(this.cantidad > this.PresupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textoIncorrecto ='La cantidad ingresada es mayor al restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
    }else{
      // crear el objeto
const GASTO ={
  nombre: this.nombreGasto,
  cantidad: this.cantidad
}
// enviamos el objeto a los suscriptores via subjet

this.PresupuestoService.agregarGasto(GASTO);
// resetear formulario
this.formularioIncorrecto = false;
this.nombreGasto = '';
this.cantidad = 0;
this.textoIncorrecto = 'Nombre del gasto o la cantidad son incorrectas'; 
    }


    

  }

}
