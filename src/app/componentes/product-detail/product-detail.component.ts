import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId!: string | null;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        this.productId = paramMap.get('id') ?? "";
    });
  }



}
