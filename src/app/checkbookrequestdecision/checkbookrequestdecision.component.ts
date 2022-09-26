import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AdminauthenticationService } from '../services/adminauthentication.service';
import { allcustomers } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { customers } from 'src/app/login/login.component';
import { checkbookreq } from 'src/app/login/login.component';
import { singlecheckbookreq  } from 'src/app/login/login.component';
@Component({
  selector: 'app-checkbookrequestdecision',
  templateUrl: './checkbookrequestdecision.component.html',
  styleUrls: ['./checkbookrequestdecision.component.css']
})
export class CheckbookrequestdecisionComponent implements OnInit {
  singlecheckbookreq: singlecheckbookreq = { };
  Customers: customers = { };
  AllCustomers: allcustomers[] = [];
  checkbookreq: checkbookreq[] = [];
  username?: string;
  currentselection?: string;
  constructor(private Router: Router, private AdminauthenticationService: AdminauthenticationService) { }

  ngOnInit(): void {

    const checkbookusername = sessionStorage.getItem("checkbookusername");
    this.AdminauthenticationService.retrievesinglecheckrequest(checkbookusername).subscribe(
    (checkbookreq) =>  this.singlecheckbookreq = checkbookreq);
  }



  turnin() {
    const checkbookusername = sessionStorage.getItem("checkbookusername");
    this.AdminauthenticationService.updateesinglecheckrequest(checkbookusername, this.singlecheckbookreq ).subscribe(
      response => {(singlecheckbookreq: any) =>  this.singlecheckbookreq = singlecheckbookreq
        alert("Check will be sent ")},
        error => {
          alert("Chequebook request failed")
       })

       alert(this.singlecheckbookreq.accept);

      }
      }









