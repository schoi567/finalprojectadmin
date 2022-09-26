import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';

export interface singleaccounts {
  id?: number,
  savingsaccountnumber?: BigInt,
  primaryaccountnumber?: BigInt, }

 export class accounts  {constructor(
   public id?: number,
   public savingsaccountnumber?: BigInt,
   public primaryaccountnumber?: BigInt,

 ) {}
 }



export interface customers {
  id?: number;
  username?: string;
  password?: any;
  email?: any;
  phonenumber?: any;
  firstname?: string;
  lastname?: string;
  primaryaccountnumber?: any;
  savingsaccountnumber?: any
  block?: any
 }

export class allcustomers  {constructor(
 public id: number,
 public username: string,
 public password: string,
 public email: any,
 public phonenumber: any,
 public firstname: string,
 public lastname: string,
 public primaryaccountnumber: any,
 public savingsaccountnumber: any,
 public block: any
) {}
}

export interface singlecheckbookreq {
  id?: number;
  accept?: boolean;
  accounttype?: any;
  date?: any;
  description?: string;
  username?: string;

 }

export class checkbookreq  {constructor(
 public id: number,
 public accept: boolean,
 public accounttype: any,
 public date: any,
 public description: string,
 public username: string,

) {}
}





@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username?: string;
  password?: any;
  rememberme?:any;
  rememberme1?:any;
  sessionrememberme?:any;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService) { }

  ngOnInit(): void {const gothrough = localStorage.getItem('gothrough');

  const gothrough1 = sessionStorage.getItem('gothrough');

 console.log(gothrough)

  if (gothrough == "gothrough")
  {this.Router.navigate(['adminpage']);}
  if (gothrough1 == "gothrough")
  {this.Router.navigate(['adminpage']);}



  }


handleLogin(){const x = localStorage.getItem("checked");
    if ((this.username == "admin") && (this.password== "admin"))
{if (x  == "checked"){
localStorage.setItem('password', "admin");
localStorage.setItem('username', "admin");
this.rememberme1  = "gothrough"
localStorage.setItem("gothrough", this.rememberme1);
this.Router.navigate(['adminpage']);

}
if (x  !== "checked"){
  localStorage.setItem('password', "admin");
  localStorage.setItem('username', "admin");
  this.sessionrememberme = "gothrough"
  sessionStorage.setItem("gothrough", this.sessionrememberme);
  this.Router.navigate(['adminpage']);

}



}
else {this.invalidLogin = true}
}


myFunction() {
  var chkPrint = <HTMLInputElement>document.getElementById("chkPrint");
  if (chkPrint.checked == true) {
      chkPrint.value = "true";
      this.rememberme = "checked";
      localStorage.setItem("checked", this.rememberme);
      const x = localStorage.getItem("checked");
      console.log(x);

  }

}
}
