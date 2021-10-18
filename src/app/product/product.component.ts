import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  posicion : number = 0
  constructor() { }

  ngOnInit(): void {
  }
  posicionTab(x){
    this.posicion = x
  }
  trasladar(x){

    return  `translateY(${-100 * x}%)` 
  }
}
