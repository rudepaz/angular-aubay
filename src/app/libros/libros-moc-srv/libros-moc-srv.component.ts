import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'aby-libros-moc-srv',
  templateUrl: './libros-moc-srv.component.html',
  styleUrls: ['./libros-moc-srv.component.css']
})
export class LibrosMocSrvComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    this.aLibros = this.booksService.getAll(this.clave)
    this.clave = ''
  }
}
