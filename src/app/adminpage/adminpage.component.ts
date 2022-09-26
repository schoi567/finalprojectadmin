import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { allcustomers } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { customers } from 'src/app/login/login.component';
import { checkbookreq } from 'src/app/login/login.component';
import { depositwithdrawmoney1 } from '../depositorwithdraw/depositorwithdraw.component';
import { depositwithdrawmoney } from '../depositorwithdraw/depositorwithdraw.component';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  Customers: customers = { };
  AllCustomers: allcustomers[] = [];
  checkbookreq: checkbookreq[] = [];
  username?: string;
  currentselection?: string;
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };
  alltransfers: alltransfers[] = [];


  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService) { }


  ngOnInit(): void {this.AdminauthenticationService.retrieveallcustomers().subscribe(
    (Customers) =>  this.AllCustomers= Customers);

    this.AdminauthenticationService.retrieveallcheckrequest().subscribe(
      (checkbookreq) =>  this.checkbookreq = checkbookreq);

    this.AdminauthenticationService.retrievealldepositwithdraw().subscribe(
        (depositwithdrawmoney1) =>  this.depositwithdrawmoney1 = depositwithdrawmoney1);

        this.AdminauthenticationService.receivetransfer().subscribe(
          (depositwithdrawmoney1) =>  this.alltransfers = depositwithdrawmoney1);
      }


}





