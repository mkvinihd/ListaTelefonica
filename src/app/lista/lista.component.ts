import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nome: string[] = [JSON.parse(localStorage.getItem("nome"))];
  telefone: string[] = [JSON.parse(localStorage.getItem("telefone"))];
  desc: string[] = [JSON.parse(localStorage.getItem("desc"))];
  
  constructor() { 
	    
  }

  ngOnInit() {
    
  }

}
// var form = localStorage.getItem("formulario");
// form = JSON.parse(form);
// console.log(form);
