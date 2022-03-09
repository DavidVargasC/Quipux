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
  formLista = new FormGroup({
    nombre: new FormControl('')
  }
  );

  constructor(private api : ListReproduccionServiceService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.api.get(this.formLista.controls['nombre'].value).subscribe(data=>{
      this.resultado = data;
    });
    console.log('buscar', this.formLista.controls['nombre'].value)
  }
  eliminar(){
    console.log('eliminar')
  }
  BuscarTodo(){
    this.api.getTodos().subscribe(data=>{
      this.resultado = data;
    });
    console.log('BuscarTodo')
  }

}
