import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatIconModule} from '@angular/material/icon';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatListModule} from '@angular/material/list'
// import { MatDividerModule } from '@angular/material/divider';
// import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { NopageComponent } from './components/nopage/nopage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { SelectcinemaComponent } from './components/selectcinema/selectcinema.component';
import { SheetbookingComponent } from './components/sheetbooking/sheetbooking.component';
import { UsersComponent } from './components/users/users.component';
import { DeletepopupComponent } from './components/deletepopup/deletepopup.component';
import { CinemadeletepopupComponent } from './components/cinemadeletepopup/cinemadeletepopup.component';
import { AddnewcinemaComponent } from './components/addnewcinema/addnewcinema.component';
import { EditcinemaComponent } from './components/editcinema/editcinema.component';
import { MoviedeletepopupComponent } from './components/moviedeletepopup/moviedeletepopup.component';
import { AddnewmovieComponent } from './components/addnewmovie/addnewmovie.component';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';




@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    FooterComponent,
    UsernavbarComponent,
    MoviesComponent,
    CinemasComponent,
    MoviedetailsComponent,
    SelectcinemaComponent,
    SheetbookingComponent,
    UsersComponent,
    DeletepopupComponent,
    CinemadeletepopupComponent,
    AddnewcinemaComponent,
    EditcinemaComponent,
    MoviedeletepopupComponent,
    AddnewmovieComponent,
    EditmovieComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),

    MatButtonModule,
    // MatButtonToggleModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatMenuModule,
    // MatListModule,
    // MatDividerModule,
    // MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
