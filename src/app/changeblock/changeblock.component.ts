import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { allcustomers } from 'src/app/login/login.component';
import { customers } from 'src/app/login/login.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-changeblock',
  templateUrl: './changeblock.component.html',
  styleUrls: ['./changeblock.component.css']
})
export class ChangeblockComponent implements OnInit {
  Customers: customers = { };
  AllCustomers: allcustomers[] = [];
  username?: string;

  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService) { }

  ngOnInit(): void {
    const customerusername = sessionStorage.getItem("customerusername");

    this.AdminauthenticationService.retrievecustomer(customerusername).subscribe(
    (Customers) =>  this.Customers= Customers);
  }


  turnin() {

    console.log(this.Customers.block)
    console.log(this.Customers)



    const customerusername = sessionStorage.getItem("customerusername");
  //  alert(customerusername);


    this.AdminauthenticationService.updatecustomerblock(customerusername, this.Customers).subscribe(
      response =>  {
        (Customers: any) =>  this.Customers = Customers;
      if (this.Customers.block == "yes")  {alert("Customer is blocked")}
      else {alert("Customer' restricted acess canceled")}},
      error => {
        alert("Chequebook request failed")
     })





  }


}
