
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
//import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes= [
    // { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent}
]

@NgModule({
    // declarations: [AppComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
}

)
export class AppRoutingModule{
    //imports : [],
    //exports : []
}