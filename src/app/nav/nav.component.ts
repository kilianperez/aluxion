import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activar : boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  activeNav(){
    this.activar = !this.activar
  }
}
