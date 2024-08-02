import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categorys: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCategory();
  }

  fetchCategory() {
    this.http.get('http://localhost:5109/api/Categories/GetQuantity/6')
    .subscribe((cate: any) => {
      this.categorys = cate;
    })
  }
}
