import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { AuthGuard } from './auth.guard'; 
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent, canActivate: [AuthGuard] }, 
  { path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuard] },
  { path: 'issue-list', component: IssuesListComponent, canActivate: [AuthGuard] }, 
  { path: 'issue-edit', component: IssueDetailsComponent, canActivate: [AuthGuard] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
