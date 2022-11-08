import { Component, OnInit } from '@angular/core';
import { Productos } from '../modelo/datos';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  productos:Productos[];

  constructor() { }

  ngOnInit() {
  }

}
