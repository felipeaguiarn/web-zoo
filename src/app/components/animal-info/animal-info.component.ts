import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent implements OnInit {
  animal: any ;
  ani: any
  index: any
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.index = params['id']);
   }

  ngOnInit(): void {
    this.ani = localStorage.getItem('animais');
    this.animal = JSON.parse(this.ani);
  }


}
