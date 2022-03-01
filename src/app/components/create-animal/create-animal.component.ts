import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    geo: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  save() {
  }
}
