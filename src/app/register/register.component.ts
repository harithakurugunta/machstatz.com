import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pagesubmit:boolean=false;
  myform:FormGroup;

  constructor(private formobj:FormBuilder, private httpObj:HttpClient) { }

  ngOnInit() {
  this.myform=this.formobj.group
    (
      {
      fname:["", Validators.required],
      emailid:["", [Validators.required, Validators.email]],
      
      password:["",Validators.required],
     
      mobile:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    });
   }

   savemessage()
   {
     this.pagesubmit=true;
     if(this.myform.invalid)
     {
       return;
     }
     
     alert("your input is valid:\n" + JSON.stringify(this.myform.value));
   }
 
  }


