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
    //JSON.stringify(this.formulario.value.nome));
   
   localStorage.setItem("nome",JSON.stringify(this.formulario.value.nome));
   localStorage.setItem("telefone",JSON.stringify(this.formulario.value.telefone));
   localStorage.setItem("desc",JSON.stringify(this.formulario.value.desc));
}
  
}
