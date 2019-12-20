import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  editPostDetails:TableData;
  tableData:TableData[]=[
    {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"
  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"

  },
  {
    title:"C language",
    source:"c publication",
    author:"Denis",
    image:"No image url",
    organisation:"oracle",
    body:"Edit body"
  }
];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOutUserSession(){
    localStorage.removeItem('UserDetails');
    this.router.navigate(['\login']);
  }
  editPost(item){
   // alert('Hi');
   this.editPostDetails=item;
   console.log(this.editPostDetails);
    $('#editModal').modal('show');
  }

}

export interface TableData{
  title:string,
  source:string,
  author:string,
  image:string,
  organisation:string
  body:string
}
