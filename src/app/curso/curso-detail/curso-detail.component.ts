import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  @Input() cursoDetail!: Curso;

  constructor() { }

  ngOnInit() {
  }

}