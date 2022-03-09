import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  formLista = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl('')
  }
  );

  ngOnInit(): void {
  }

  submit(form: any){
    console.log(form)
  }

}
