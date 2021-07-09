import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  susbcription : Subscription;
  presupuesto : number = 0;
  restante: number = 0;
  listGastos: any[] = [];

  constructor(private PresupuestoService: PresupuestoService) {
  this.susbcription = this.PresupuestoService.getGastos().subscribe(data  => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    });
   }

  ngOnInit(): void {
    this.presupuesto= this.PresupuestoService.presupuesto;
    this.restante = this.PresupuestoService.restante;
  }

  ngOnDestroy(): void {
    this.susbcription.unsubscribe;
  }
  listarGastos(){}

  aplicarColorRestante(){
    if(this.presupuesto/4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto/2 > this.restante){
    return 'alert alert-warning';
    }
    else{
      return 'alert alert-secondary'
    }
  }

}
