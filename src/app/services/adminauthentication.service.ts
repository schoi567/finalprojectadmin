import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { accounts } from 'src/app/login/login.component';
import { customers } from 'src/app/login/login.component';
import { allcustomers } from 'src/app/login/login.component';
import { checkbookreq } from 'src/app/login/login.component';
import { singlecheckbookreq } from 'src/app/login/login.component';
import { DepositorwithdrawComponent } from '../depositorwithdraw/depositorwithdraw.component';
import { depositwithdrawmoney } from '../depositorwithdraw/depositorwithdraw.component';
import { depositwithdrawmoney1 } from '../depositorwithdraw/depositorwithdraw.component';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdminauthenticationService {

  constructor(private http:HttpClient) { }

  isUserLogin(){
    let loggedin = sessionStorage.getItem("gothrough");
    let loggedin1 = localStorage.getItem("gothrough");
  return !(loggedin===null && loggedin1===null); }


  retrieveallcustomers() {
    return this.http.get<allcustomers[]>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/customers`)
  }

  retrieveallaccounts():  Observable<accounts[]>  {
    return this.http.get<accounts[]>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/customers/accounts`)
  }
  retrievecustomer(username: any): Observable<customers> {
    return this.http.get<customers>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/customers/login/${username}`)
  }

  retrieveallcheckrequest():  Observable<checkbookreq[]>  {
    return this.http.get<checkbookreq[]>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/checkrequests`)
  }

  retrievesinglecheckrequest(checkbookusername: any):  Observable<singlecheckbookreq>
  {
    return this.http.get<singlecheckbookreq>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/checkrequests/${checkbookusername}`)
  }

  updatecustomerblock(username: any, customers: any): Observable<customers> {
    return this.http.put<customers>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/customersblock/${username}`,customers)
  }

  updateesinglecheckrequest(checkbookusername: any, singlecheckbookreq: singlecheckbookreq):  Observable<singlecheckbookreq> {
    return this.http.put<singlecheckbookreq>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/checkrequests/${checkbookusername}`, singlecheckbookreq)
  }

  retrievealldepositwithdraw(): Observable<depositwithdrawmoney[]> {
    return this.http.get<depositwithdrawmoney1[]>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/depositwithdrawmoney/all`)
  }

  retrievedepositwithdraw(id: any ): Observable<depositwithdrawmoney> {
    return this.http.get<depositwithdrawmoney>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/depositwithdrawmoney/all/${id}`)
  }


  updatedepositwithdraw(id: any, depositwithdrawmoney:depositwithdrawmoney ): Observable<depositwithdrawmoney> {
    return this.http.put<depositwithdrawmoney>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/depositwithdrawmoney/all/${id}`, depositwithdrawmoney)
  }
  transfer(transfer:transfer): Observable<transfer> {
    return this.http.post<transfer>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/transfermoney/admin`,transfer)
  }

  receivetransfer(): Observable<alltransfers[]> {
    return this.http.get<alltransfers[]>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/transfermoney` )
  }

  receivesingletransfer(id: any): Observable<transfer> {
    return this.http.get<transfer>(`http://ec2-3-233-220-155.compute-1.amazonaws.com:8080/transfermoney/${id}`)
  }

}
