import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-selectcinema',
  templateUrl: './selectcinema.component.html',
  styleUrls: ['./selectcinema.component.css']
})
export class SelectcinemaComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,private service:AppServiceService,private router:Router){

  }


  movieid:any;
  moviename:any;
  shows:any;


  ngOnInit(): void {
    
    this.service.sendingSelectCinemaRole.subscribe((data)=>{
      let role:any=data.role;
      if(role==-1){
        this.router.navigate(['/']);
      }
      else{
        this.activatedRoute.params.subscribe((params)=>{
          console.log(params);
          this.movieid=params['movieid'];
          this.moviename=params['moviename'];
        })

        this.service.getShows({movieid:this.movieid}).subscribe((response:any)=>{
          this.shows=response.shows;
          console.log('displaying shows \n', this.shows);

          for(let i=0;i<this.shows.length;i++){
            this.service.getCinemaDetails({cinemaid:this.shows[i].cinemaid}).subscribe((response:any)=>{
              this.shows[i].cinemaname=response.name;
              this.shows[i].cinemaaddress=response.address;
              this.shows[i].cinemacity=response.city;
              console.log(this.shows[i]);
            })
          }
        })
      }
    })

    this.service.selectCinemaRole();

  }

  
}
