import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GProject';

  constructor(private router:Router){}
  ngOnInit(){
    if(localStorage.getItem('UserDetails')!=null){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['\login']);
    }     
  }
}
