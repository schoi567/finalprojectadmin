import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { allcustomers } from 'src/app/login/login.component';
import { customers } from 'src/app/login/login.component';
import { depositwithdrawmoney1 } from '../depositorwithdraw/depositorwithdraw.component';
import { depositwithdrawmoney } from '../depositorwithdraw/depositorwithdraw.component';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {
  AllCustomers: allcustomers[] = [];
  Customers: customers = { };
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };
  alltransfers: alltransfers[] = [];
  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService) { }

  ngOnInit(): void {
    const customerusername = sessionStorage.getItem("customerusername");
    this.AdminauthenticationService.retrieveallcustomers().subscribe(
      (Customers) =>  this.AllCustomers= Customers);
    this.AdminauthenticationService.retrievecustomer(customerusername).subscribe(
    (Customers) =>  this.Customers= Customers);

    this.AdminauthenticationService.retrievealldepositwithdraw().subscribe(
      (depositwithdrawmoney1) =>  this.depositwithdrawmoney1 = depositwithdrawmoney1);
      this.AdminauthenticationService.receivetransfer().subscribe(
        (depositwithdrawmoney1) =>  this.alltransfers = depositwithdrawmoney1);

  }


  data1(data: any) {
    let username =   data
    sessionStorage.setItem("requestid",username);
    const requestid = sessionStorage.getItem("requestid");
    alert(requestid + " selected");
    this.Router.navigate(["dwpendingchange"]);



    }


    data2(data: any) {
      let id =   data
      sessionStorage.setItem("transferid",id);
      const transferid = sessionStorage.getItem("transferid");
      alert(transferid + " selected");
      this.Router.navigate(["transferchange"]);



      }



  data(data: string) {
    let username =   data
    sessionStorage.setItem("customerusername",username);
    const customerusername = sessionStorage.getItem("customerusername");
    alert(customerusername + " selected");
    this.Router.navigate(["changeblock"]);
    }

}
