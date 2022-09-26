import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-transferrequestchange',
  templateUrl: './transferrequestchange.component.html',
  styleUrls: ['./transferrequestchange.component.css']
})
export class TransferrequestchangeComponent implements OnInit {
  transfer:transfer ={};
  alltransfers: alltransfers[] = [];
  constructor(public AdminauthenticationService:AdminauthenticationService,
    public Router:Router
    ) { }

  ngOnInit(): void {
    const transferid = sessionStorage.getItem("transferid");
    console.log(transferid);
    var newnumber = Number(transferid)
    this.AdminauthenticationService.receivesingletransfer(newnumber).subscribe(
    (transfer) =>  this.transfer = transfer);
  }


  turnin() {
    console.log(this.transfer.transfer)
    this.AdminauthenticationService.transfer(this.transfer).subscribe(
      (transfer) =>  this.transfer = transfer);
      console.log(this.transfer)

    alert(this.transfer.transfer);


  this.Router.navigate(["adminpage"]);
  }
}
