import { EventEmitter, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService{

  role:number=3;
  
  constructor(private http: HttpClient) { 

  }



  setRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitRole();
        }
        else{
          this.role=-1;
          this.emitRole();
        }
      }); 
    }
  }

  sendingRoleEmitter=new EventEmitter<{role:number}>();
  emitRole(){
    this.sendingRoleEmitter.emit({role:this.role});
  }





  usersRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitUsersRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitUsersRole();
        }
        else{
          this.role=-1;
          this.emitUsersRole();
        }
      }); 
    }
  }

  sendingUsersRole=new EventEmitter<{role:number}>();
  emitUsersRole(){
    this.sendingUsersRole.emit({role:this.role});
  }




  moviesRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitMoviesRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitMoviesRole();
        }
        else{
          this.role=-1;
          this.emitMoviesRole();
        }
      }); 
    }
  }

  sendingMoviesRole=new EventEmitter<{role:number}>();
  emitMoviesRole(){
    this.sendingMoviesRole.emit({role:this.role});
  }





  moviesDetailsRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitMoviesDetailsRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitMoviesDetailsRole();
        }
        else{
          this.role=-1;
          this.emitMoviesDetailsRole();
        }
      }); 
    }
  }

  sendingMoviesDetailsRole=new EventEmitter<{role:number}>();
  emitMoviesDetailsRole(){
    this.sendingMoviesDetailsRole.emit({role:this.role});
  }




  cinemasRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitCinemasRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          console.log('set role is ',this.role);
          this.emitCinemasRole();
        }
        else{
          this.role=-1;
          this.emitCinemasRole();
        }
      }); 
    }
  }

  sendingCinemasRole=new EventEmitter<{role:number}>();
  emitCinemasRole(){
    this.sendingCinemasRole.emit({role:this.role});
  }




  addRecordRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitAddRecordRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitAddRecordRole();
        }
        else{
          this.role=-1;
          this.emitAddRecordRole();
        }
      }); 
    }
  }

  sendingAddRecordRole=new EventEmitter<{role:number}>();
  emitAddRecordRole(){
    this.sendingAddRecordRole.emit({role:this.role});
  }




  editCinemaRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitEditCinemaRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitEditCinemaRole();
        }
        else{
          this.role=-1;
          this.emitEditCinemaRole();
        }
      }); 
    }
  }

  sendingEditCinemaRole=new EventEmitter<{role:number}>();
  emitEditCinemaRole(){
    this.sendingEditCinemaRole.emit({role:this.role});
  }



  
  editMovieRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitEditMovieRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitEditMovieRole();
        }
        else{
          this.role=-1;
          this.emitEditMovieRole();
        }
      }); 
    }
  }

  sendingEditMovieRole=new EventEmitter<{role:number}>();
  emitEditMovieRole(){
    this.sendingEditMovieRole.emit({role:this.role});
  }

  

  selectCinemaRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitSelectCinemaRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitSelectCinemaRole();
        }
        else{
          this.role=-1;
          this.emitSelectCinemaRole();
        }
      }); 
    }
  }

  sendingSelectCinemaRole=new EventEmitter<{role:number}>();
  emitSelectCinemaRole(){
    this.sendingSelectCinemaRole.emit({role:this.role});
  }




  sheetBookingRole(){
    const token=localStorage.getItem('token');
    if(token==null){
      this.role=-1;
      this.emitSheetBookingRole();
    }
    else{
      let headers:any=new HttpHeaders().set("Authorization",'bearer'+' '+token); 
      this.http.get('/api/auth/getrole',{headers}).subscribe( (response:any)=>{
        if(response.role!=null){
          this.role=response.role;
          this.emitSheetBookingRole();
        }
        else{
          this.role=-1;
          this.emitSheetBookingRole();
        }
      }); 
    }
  }

  sendingSheetBookingRole=new EventEmitter<{role:number}>();
  emitSheetBookingRole(){
    this.sendingSheetBookingRole.emit({role:this.role});
  }




  //just for testing purpose
  getData(){
    return this.http.get('/api/getData');
  }

  registration(registrationData:any){
    return this.http.post('/api/auth/registration',registrationData);
  }

  login(loginData:any){
    return this.http.post('/api/auth/login',loginData);
  }
  
  //sending forgot passwor email to user's email
  sendEmail(email:any){
    return this.http.post('/api/auth/sendemail',email);
  }

  logOut(){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set("Authorization",`bearer ${token}`);
    return this.http.get('/api/auth/logout',{headers});
  }





  getMovies(){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization', `bearer ${token}`);
    return this.http.get('/api/movies/getmovies',{headers});
  }

  getMovie(movieid:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.get(`/api/movies/getmovie/${movieid}`,{headers});
  }

  deleteMovie(movieid:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.delete(`/api/movies/deletemovie/${movieid}`,{headers:headers});
  }

  addMovie(movieDetails:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.post('/api/movies/addmovie',movieDetails,{headers:headers});
  } 

  editMovie(movieid:any, moviedetails:any){
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.put(`/api/movies/editmovie/${movieid}`,moviedetails,{headers:headers});
  }





  getCinemas(){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization', `bearer ${token}`);
    return this.http.get('/api/cinemas/getcinemas',{headers});
  }

  deleteCinema(id:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.delete(`/api/cinemas/delete/${id}`, {headers});
  }

  addCinema(cinemaDetails:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.post('/api/cinemas/addcinema',cinemaDetails, {headers:headers});
  }

  getCinema(cinemaid:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.get(`/api/cinemas/getcinema/${cinemaid}`,{headers});
  }

  editCinema(cinemaid:any,cinemaDetails:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.put(`/api/cinemas/editcinema/${cinemaid}`,cinemaDetails,{headers:headers});
  }





  getUsers(){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization', `bearer ${token}`);
    return this.http.get('/api/auth/getusers',{headers});
  }

  getUser(id:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.get(`/api/auth/getuser/${id}`,{headers});
  }

  getUserByToken(){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.get('/api/auth/getuserbytoken',{headers});
  }

  deleteUser(id:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.delete(`/api/auth/delete/${id}`,{headers});
  }

  

  
  
  getShows(movieid:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization',`bearer ${token}`);
    return this.http.get(`/api/shows/getshows/${movieid}`,{headers});
  }

  getShow(showid:any){
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization', `bearer ${token}`);
    return this.http.get(`/api/shows/getshow/${showid}`,{headers});
  }






  sendBookedTickets(email:any,amount:any,tickets:any,userid:any,movieid:any,cinemaid:any,showid:any){
    console.log('service sending boking tickets');
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders().set('Authorization', `bearer ${token}`);

    const bookingDetails={
      email:email,
      amount:amount,
      tickets:tickets,
      userid:userid,
      movieid:movieid,
      cinemaid:cinemaid,
      showid:showid
    }
    console.log('booking service ',bookingDetails);
    return this.http.post('/api/booking/booktickets',bookingDetails,{headers:headers});
  }




  sendingDeleteMessage=new EventEmitter<{message:any}>();
  emitDeleteMessage(message:any){
    this.sendingDeleteMessage.emit({message:message});
  }

  sendingDeleteCinemaMessage=new EventEmitter<{message:any}>();
  emitDeleteCinemaMessage(message:any){
    this.sendingDeleteCinemaMessage.emit({message:message});
  }

  sendingDeleteMovieMessage=new EventEmitter<{message:any}>();
  emitDeleteMovieMessage(message:any){
    this.sendingDeleteMovieMessage.emit({message:message});
  }


}
