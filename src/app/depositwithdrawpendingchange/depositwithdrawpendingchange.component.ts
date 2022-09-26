import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { depositwithdrawmoney } from '../depositorwithdraw/depositorwithdraw.component';
import { depositwithdrawmoney1 } from '../depositorwithdraw/depositorwithdraw.component';


@Component({
  selector: 'app-depositwithdrawpendingchange',
  templateUrl: './depositwithdrawpendingchange.component.html',
  styleUrls: ['./depositwithdrawpendingchange.component.css']
})
export class DepositwithdrawpendingchangeComponent implements OnInit {
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoneywithcustomername: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };
  constructor(private router: Router, public AdminauthenticationService:AdminauthenticationService) { }


  ngOnInit(): void {
    const requestid = sessionStorage.getItem("requestid");
    this.AdminauthenticationService.retrievealldepositwithdraw().subscribe(
      (depositwithdrawmoney1) =>  this.depositwithdrawmoney1 = depositwithdrawmoney1);


    this.AdminauthenticationService.retrievedepositwithdraw(requestid).subscribe(
      (depositwithdrawmoney) => this.depositwithdrawmoney = depositwithdrawmoney)
  }



decide() { const requestid = sessionStorage.getItem("requestid");
this.AdminauthenticationService.updatedepositwithdraw(requestid, this.depositwithdrawmoney).subscribe(
  response => {(depositwithdrawmoney: any) => this.depositwithdrawmoney = depositwithdrawmoney
  alert("Deposit or Withdrawl pending change success")
  },
  error => { alert("Deposit or Withdrawl pending change failed")}
)






}


}
