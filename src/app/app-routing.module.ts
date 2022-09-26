import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { CheckbookrequestComponent } from './checkbookrequest/checkbookrequest.component';
import { ChangeblockComponent } from './changeblock/changeblock.component';
import { CheckbookrequestdecisionComponent } from './checkbookrequestdecision/checkbookrequestdecision.component';
import { DepositorwithdrawComponent } from './depositorwithdraw/depositorwithdraw.component';
import { DepositwithdrawpendingchangeComponent } from './depositwithdrawpendingchange/depositwithdrawpendingchange.component';
import { TransferrequestchangeComponent } from './transferrequestchange/transferrequestchange.component';


const routes: Routes = [
  { path: '',component:LoginComponent},
  { path: 'adminpage',component:AdminpageComponent},
  { path: 'useraccount',component:UseraccountComponent},
  { path: 'checkbookrequest',component:CheckbookrequestComponent},
  { path: 'changeblock',component:ChangeblockComponent},
  { path: 'checkbookrequestdes',component:CheckbookrequestdecisionComponent},
  { path: 'depositwithdraw',component:DepositorwithdrawComponent},
  { path: 'dwpendingchange',component:DepositwithdrawpendingchangeComponent},
  { path: 'transferchange',component:TransferrequestchangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
