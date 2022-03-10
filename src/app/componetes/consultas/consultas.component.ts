import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListReproduccionServiceService } from '../../service/list-reproduccion-service.service'

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})
export class ConsultasComponent implements OnInit {

  resultado: any;
  resultadoGet: any;
  resulGet = false;
  formLista = new FormGroup({
    nombre: new FormControl('')
  }
  );

  constructor(private api : ListReproduccionServiceService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.resultado = [];
    this.api.get(this.formLista.controls['nombre'].value).subscribe(data=>{
      console.log(data);
      this.resultadoGet = data;
      this.resulGet = true;
      console.log(this.resultado)
    });
  }
  eliminar(){
    this.resultado = [];
    this.resulGet = false;
    this.api.delete(this.formLista.controls['nombre'].value).subscribe(data=>{
      console.log(data);
    });
    console.log('eliminar')
  }
  BuscarTodo(){
    this.resulGet = false;
    this.api.getTodos().subscribe(data=>{
      console.log(data);
      this.resultado = data;
      console.log(this.resultado)
    });
    console.log('BuscarTodo')
  }

}
