import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  email:any;
  password:any;
  act:boolean = false;
  constructor(private router: Router) { }

  Verify()
  {
      if(this.email=="yogesh" && this.password =="1234567"){
        this.act=true; 
        
        this.router.navigate(['/component']);
       
      }
      else if(this.email!="yogesh"){
        window.alert("Wrong Username");
      }
      else if((this.password!="1234567"))
      {
        window.alert("Wrong Password");
      }
      else{
        window.alert("Wrong username and password");
      }
      
      
  }
  
  ngOnInit(): void {
  }

  

}
