import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  users = ['john', 'mark', 'will', 'adam', 'edward'];

  constructor() { }

  ngOnInit(): void { }

}