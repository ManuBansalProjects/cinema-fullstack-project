import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-sheetbooking',
  templateUrl: './sheetbooking.component.html',
  styleUrls: ['./sheetbooking.component.css']
})
export class SheetbookingComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private service:AppServiceService,private router:Router){

  }

  showid:any;
  moviename:any;
  show:any;
  cinemaid:any;
  movieid:any;

  ngOnInit(): void {

    this.service.sendingRoleEmitter.subscribe((data)=>{
      let role:any=data.role;
      if(role==-1){
        this.router.navigate(['/']);
      }

      else{
        this.activatedRoute.params.subscribe((params)=>{
          this.showid=params['showid'];
          this.moviename=params['moviename'];
          this.movieid=params['movieid'];
        })
        
        this.service.getShow(this.showid).subscribe((response:any)=>{
          this.show=response.show;

          this.service.getCinemaDetails({cinemaid:this.show.cinemaid}).subscribe((response:any)=>{ 
            this.show.cinemaname=response.name;
            this.show.cinemaaddress=response.address;
            this.show.cinemacity=response.city;

            this.cinemaid=response.id;
          })
        })   
      }
    })

    this.service.setRole();
  }



  
  sheetrows:any[]=[0,1,2,3,4,5,6,7,8,9];
  sheetcolumns:any[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  booked:any[]=[];
  tickets:any[]=[];

  onSubmit(form:any){

    console.log(form.value);    

    for(let i=0;i<this.tickets.length;i++){
      this.booked.push(this.tickets[i]);
    }

    // this.service.saveTicketsToService(this.tickets);
    // this.router.navigate([`/payment/${this.movieid}/${this.cinemaid}/${this.showid}`]);

    this.pay();

  }



  pay(){

  }


  ticketCount=0;
  isDisable=1;

  onClick(event:any,ticketNum:any){

    console.log(event.value); 

    if(event.value==true){ 
      this.ticketCount++;
      this.tickets.push(ticketNum);
    }
    else{
      this.ticketCount--;
      let index=this.tickets.indexOf(ticketNum);
      this.tickets.splice(index,1);
    }

    console.log(this.ticketCount);
    console.log(this.tickets);

    if(this.ticketCount<1 || this.ticketCount>5){
      this.isDisable=1;
    }
    else{
      this.isDisable=0;
    }

  }

}
