import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
})
export class BlogPostComponent implements OnInit {
  text?: string;

  constructor() {}

  ngOnInit(): void {
    this.text = "nice blog";
  }
}
