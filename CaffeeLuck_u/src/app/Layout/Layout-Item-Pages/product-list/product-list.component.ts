import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  // http://localhost:5109/api/Products
  products: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.http.get('http://localhost:5109/api/Products').subscribe((resp: any) => {
      this.products = resp;
    })
  }

}
