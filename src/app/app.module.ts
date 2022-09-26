import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HeaderComponent } from './header/header.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { CheckbookrequestComponent } from './checkbookrequest/checkbookrequest.component';
import { ChangeblockComponent } from './changeblock/changeblock.component';
import { CheckbookrequestdecisionComponent } from './checkbookrequestdecision/checkbookrequestdecision.component';
import { DepositorwithdrawComponent } from './depositorwithdraw/depositorwithdraw.component';
import { DepositwithdrawpendingchangeComponent } from './depositwithdrawpendingchange/depositwithdrawpendingchange.component';
import { TransferrequestchangeComponent } from './transferrequestchange/transferrequestchange.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    HeaderComponent,
    UseraccountComponent,
    CheckbookrequestComponent,
    ChangeblockComponent,
    CheckbookrequestdecisionComponent,
    DepositorwithdrawComponent,
    DepositwithdrawpendingchangeComponent,
    TransferrequestchangeComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
