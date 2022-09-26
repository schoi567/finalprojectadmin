import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { allcustomers } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { customers } from 'src/app/login/login.component';
import { checkbookreq } from 'src/app/login/login.component';
import { CheckbookrequestdecisionComponent } from '../checkbookrequestdecision/checkbookrequestdecision.component';
import { singlecheckbookreq  } from 'src/app/login/login.component';
@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-checkbookrequest',
  templateUrl: './checkbookrequest.component.html',
  styleUrls: ['./checkbookrequest.component.css']
})
export class CheckbookrequestComponent implements OnInit {
  Customers: customers = { };

  singlecheckbookreq: singlecheckbookreq = { };
  AllCustomers: allcustomers[] = [];
  checkbookreq: checkbookreq[] = [];
  username?: string;
  currentselection?: string;
  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService,
    private CheckbookrequestdecisionComponent: AdminauthenticationService) { }

  ngOnInit(): void {  this.AdminauthenticationService.retrieveallcheckrequest().subscribe(
    (checkbookreq) =>  this.checkbookreq = checkbookreq);


  }


  data(data: string) {

    let username =   data

    sessionStorage.setItem("checkbookusername",username);

    const customerusername = sessionStorage.getItem("checkbookusername");

    alert(customerusername + " selected");
    this.Router.navigate(["checkbookrequestdes"]);



    }

  turnin() {




  }


}
