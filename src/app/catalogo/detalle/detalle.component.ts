import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DATA } from '../catalogo.data';

@Component({
  selector: 'aby-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  data: any;
  constructor(
    public activateedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    let id = this.activateedRoute.snapshot.params['id'];
    this.data = DATA[id];
  }

  onVolver() {
    this.router.navigate['/catalogo']
  }

}
