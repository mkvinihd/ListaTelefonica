import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  formContato: any;
  
  constructor() { 
	    this.formContato = JSON.parse(localStorage.getItem('formContato'));
  }

  ngOnInit() {
    
  }

}
