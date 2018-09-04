import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	formulario: FormGroup;
  contato: string[] = [];

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {

  	this.formulario = this.formBuilder.group({
  		nome: [null],
  		telefone: [null],
		  desc: [null]  		
  	})
  }

  onSubmit(){
	 this.contato = this.formulario.value;
   window.localStorage.setItem("formulario",JSON.stringify(this.contato));
}
  
}
