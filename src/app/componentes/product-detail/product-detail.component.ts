import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

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

    //   this.activatedRoute.paramMap.subscribe((paramMap) => {

    //     if (paramMap.has('productId')) {
    //       this.productId = paramMap.get('productId') ?? "";
    //     }
    //      console.log(this.productId);

    //   }
    // );


    this.activatedRoute.params.subscribe((paramMap: Params) => {
      if (paramMap['productId']) {
        this.productId = paramMap['productId']
      }
    });




        // this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
    //     if (paramMap.has('productId')) {
    //       this.productId = paramMap.get('productId') ?? "";
    //     }
    // });

  }

  guardarProducto() {
    const prodString = JSON.stringify(this.productId);
    localStorage.setItem("producto", prodString);
  }



}
