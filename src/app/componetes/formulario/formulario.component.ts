import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListReproduccionServiceService } from 'src/app/service/list-reproduccion-service.service';

import { Cancion } from '../../models/Canciones';
import { ListaReproduccion } from '../../models/ListaReproduccion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  listaReproduccion : ListaReproduccion = new ListaReproduccion;
  
  canciones : Cancion[] = [];

  constructor(private api : ListReproduccionServiceService) { }

  formLista = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('')
  }
  );

  formCanciones = new FormGroup({
    titulo: new FormControl(''),
    artista: new FormControl(''),
    album: new FormControl(''),
    anno : new FormControl('')
  }
  );

  ngOnInit(): void {
  }

  submit() {
    if(this.formLista.valid){
      this.listaReproduccion.nombre = this.formLista.controls['nombre'].value;
      this.listaReproduccion.descripcion = this.formLista.controls['descripcion'].value;
      this.listaReproduccion.canciones = this.canciones;
      console.log(this.listaReproduccion);
      this.api.post(this.listaReproduccion).subscribe(data=>{
        console.log(data);
        alert("INFORMACION GUARDADA");
      });
    }else {
      alert("INFORMACION INCOMPLETA");
    }
   
  }

  agregar(){
    const cancion: Cancion = new Cancion();
    cancion.titulo = this.formCanciones.controls['titulo'].value;
    cancion.album = this.formCanciones.controls['album'].value;
    cancion.artista = this.formCanciones.controls['artista'].value;
    cancion.anno = this.formCanciones.controls['anno'].value;
    this.canciones.push(cancion);
    this.formCanciones.reset();
  }

}
