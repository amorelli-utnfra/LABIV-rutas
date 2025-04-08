import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private router: Router) {

  }

  productos = [{
    id: 1,
    nombre: "Coca cola"
  },
  {
    id: 2,
    nombre: "Pepsi"
  }]


  goTo(productId: number, nombre: string) {
    this.router.navigate(['products/detalle', productId]);
  }

}
