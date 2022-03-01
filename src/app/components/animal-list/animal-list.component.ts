import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AnimalApiService } from 'src/app/services/animal-api.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  constructor(private animalApiService: AnimalApiService) { }
  animals: any = [];
  ani: any
  loggin: any
  control = false


  ngOnInit(): void {
    this.ani = localStorage.getItem('animais');
    this.animals = JSON.parse(this.ani);
    this.check()
  }

  listAnimals(){
    this.animalApiService.apiListAllAnimals.subscribe(
      res => {
          localStorage.setItem('animais', JSON.stringify(res));
          this.ani = localStorage.getItem('animais');
          this.animals = JSON.parse(this.ani);
          this.control = false
      })
  }

  check(){

  }

  login(){
    localStorage.setItem('login', 'realizado');
    this.loggin = localStorage.getItem('login');
  }




}
