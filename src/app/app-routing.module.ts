import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './componetes/consultas/consultas.component';
import { FormularioComponent } from './componetes/formulario/formulario.component';

const routes: Routes = [
  { path: "", component: FormularioComponent },
  { path: "consultas", component: ConsultasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
