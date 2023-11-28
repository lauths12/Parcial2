import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursoComponent, CursoListComponent, CursoDetailComponent],
  exports: [CursoComponent, CursoListComponent, CursoDetailComponent]

})
export class CursoModule { }
