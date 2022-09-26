
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { UseraccountComponent } from '../useraccount/useraccount.component';
import { CheckbookrequestComponent } from '../checkbookrequest/checkbookrequest.component';
import { AdminauthenticationService } from './../services/adminauthentication.service';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface transfer {
  id?: any;
  fromusername?: any;
  fromaccounttype?: any;
  date?: any;
  toaccounttype?: any;
  receiverusename?: any;
  amount?: any
  transfer?: any

 }

export class alltransfers  {constructor(
 public id: any,
 public fromusername: any,
 public fromaccounttype: any,
 public date: any,
 public toaccounttype: any,
 public receiverusename: any,
 public amount: any,
 public transfer: any
) {}
}


@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Router:Router, public AdminauthenticationService:AdminauthenticationService,
    private FormsModule: FormsModule
   )   { }

  ngOnInit(): void {

}



  HomePage() {
    this.Router.navigate([""]);

  }


  useraccount() {
    const customerusername = sessionStorage.getItem("customerusername");


    {this.Router.navigate(["useraccount"]);
  }




  }


  logout() {
  sessionStorage.clear();
  localStorage.clear();

    this.Router.navigate([""]);
  }


  checkbookrequest() {

    this.Router.navigate(["checkbookrequest"]);



  }



  }
