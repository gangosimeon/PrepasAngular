import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { AppareilsComponent } from './appareils/appareils.component';

import { AppareilService } from "./services/appareil.services";
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { Routes , RouterModule} from '@angular/router';
import { AuthService } from './services/auth.services';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.srvice';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes:Routes=[
  {path:'appareils',canActivate:[AuthGuard], component:AppareilViewComponent },
  {path:'appareils/:id',canActivate:[AuthGuard], component:SingleAppareilComponent},
  {path:'edit',canActivate:[AuthGuard],component:EditAppareilComponent },
  {path:'auth', component:AuthComponent},
  {path:'users',canActivate:[AuthGuard],component:UserListComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'',component: AppareilViewComponent},
  {path:'not-found',component:FourOhFourComponent},
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    AppareilsComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
