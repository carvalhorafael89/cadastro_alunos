import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ListarAlunosEditComponent } from './listar-alunos-edit/listar-alunos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    ListarAlunosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
