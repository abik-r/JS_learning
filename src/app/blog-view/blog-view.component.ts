import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  public allBlogs=[
    {
      title:"This is blog1",
      description:"this is blog 1 description",
      created:"2017-10-20T12:30:40.854Z",
      blogId:"1",
      tags:[],
      bodyHtml:"this is body blog",
      category:"comedy"
    },
    {
      title:"This is blog2",
      description:"this is blog 2 description",
      created:"2017-07-20T12:20:47.854Z",
      blogId:"2",
      tags:[],
      bodyHtml:"this is body blog",
      category:"comedy"
    },
    {
      title:"This is blog3",
      description:"this is blog 3 description",
      created:"2017-06-22T12:20:00.854Z",
      blogId:"3",
      tags:[],
      bodyHtml:"this is body blog",
      category:"comedy"
    }
  ]

  constructor(private _route:ActivatedRoute, private router:Router) { 

  }

  ngOnInit() {
    let myBlogId= this._route.snapshot.paramMap.get('blogId');
    this.getSingleBlogInformation(myBlogId);
    }
    public getSingleBlogInformation (currentBlogId):any{
      for(let blog of this.allBlogs){
        if(blog.blogId==currentBlogId){
          this.currentBlog=blog;
        }
      }
     console.log(this.currentBlog);  
    }
  }


