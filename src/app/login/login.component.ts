import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  name:any[]=[];
  pass:any[]=[];

  ngOnInit() {
   
  }

  check(name,pass)
  {
    
  
    if(name!="admin" || pass!="admin"){
    alert("Error Password or Username");
      
     /*opens the target page while Id & password matches*/
    }
    else {
      var url = 'http://localhost:4200/home';
      window.open(url); 
     
     /*displays error message*/
    }
  
  }
}