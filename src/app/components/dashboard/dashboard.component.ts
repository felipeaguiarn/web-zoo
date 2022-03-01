import { Component, OnInit } from '@angular/core';

export interface Animal {
  name: string
  id: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
