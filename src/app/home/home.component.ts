import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs=[
    {
      title:"This is blog1",
      description:"this is blog 1 description",
      created:"2017-10-20T12:30:40.854Z",
      blogId:"1"
    },
    {
      title:"This is blog2",
      description:"this is blog 2 description",
      created:"2017-07-20T12:20:47.854Z",
      blogId:"2"
    },
    {
      title:"This is blog3",
      description:"this is blog 3 description",
      created:"2017-06-22T12:20:00.854Z",
      blogId:"3"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
