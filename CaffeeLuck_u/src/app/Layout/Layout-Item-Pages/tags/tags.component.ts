import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  //http://localhost:5109/api/Tags/GetQuantity/6

  tags:any = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('http://localhost:5109/api/Tags/GetQuantity/6')
    .subscribe((resp: any) => {
      this.tags = resp;
    })
  }

}
