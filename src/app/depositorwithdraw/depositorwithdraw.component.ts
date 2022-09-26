import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';


export interface depositwithdrawmoney {
  id?: number,
  amount?: BigInt,
  approved?: any,
  date?: any,
  account?: any,
  username?: any,
}

 export class depositwithdrawmoney1  {constructor(
   public id?: number,
   public amount?: BigInt,
   public approved?: any,
   public date?: any,
   public account?: any,
   public username?: any
 ) {}
 }

@Component({
  selector: 'app-depositorwithdraw',
  templateUrl: './depositorwithdraw.component.html',
  styleUrls: ['./depositorwithdraw.component.css']
})
export class DepositorwithdrawComponent implements OnInit {
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };
  constructor(private router: Router, public AdminauthenticationService:AdminauthenticationService) { }

  ngOnInit(): void {

    this.AdminauthenticationService.retrievealldepositwithdraw().subscribe(
      (depositwithdrawmoney1) =>  this.depositwithdrawmoney1 = depositwithdrawmoney1);


  }

}
