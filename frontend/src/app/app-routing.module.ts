import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CinemasComponent } from './components/cinemas/cinemas.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { SelectcinemaComponent } from './components/selectcinema/selectcinema.component';
import { SheetbookingComponent } from './components/sheetbooking/sheetbooking.component';
import { UsersComponent } from './components/users/users.component';
import { AddnewcinemaComponent } from './components/addnewcinema/addnewcinema.component';
import { EditcinemaComponent } from './components/editcinema/editcinema.component';
import { AddnewmovieComponent } from './components/addnewmovie/addnewmovie.component';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent, 
    children:[
      {path:'movies', component:MoviesComponent},
      {path:'movies/editmovie/:id', component:EditmovieComponent},
      {path:'movies/:moviename/:movieid', component:MoviedetailsComponent},
      {path:'movies/:moviename/:movieid/bookmovie', component:SelectcinemaComponent},
      {path:'movies/:moviename/:movieid/:cinemaid/:showid/sheetbooking', component:SheetbookingComponent},
      {path:'cinemas', component:CinemasComponent},
      {path:'users', component:UsersComponent},
      {path:'cinemas/addnewcinema', component:AddnewcinemaComponent},
      {path:'cinemas/editcinema/:id', component:EditcinemaComponent},
      {path:'movies/addnewmovie', component:AddnewmovieComponent}
    ]
  },
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'**', component:NopageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
