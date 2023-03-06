import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editcinema',
  templateUrl: './editcinema.component.html',
  styleUrls: ['./editcinema.component.css']
})
export class EditcinemaComponent implements OnInit{

  constructor(private service:AppServiceService,private activatedRoute:ActivatedRoute,private router:Router,private toastr:ToastrService){

  }

  role:any;

  cinema:any;
  myform:any=new FormGroup({
    name: new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city: new FormControl('', [Validators.required]),
    mobile: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
      
    console.log('edit-cinema componenent ngOnInit says');

    // console.log(this.activatedRoute.snapshot.params['id']);
      
    this.service.sendingEditCinemaRole.subscribe((data)=>{
      this.role=data.role;
      console.log('edit cinema role :',this.role);
      if(this.role!=1){
        this.router.navigate(['/']);
      }    
      else{
        let id=this.activatedRoute.snapshot.params['id'];

        this.service.getCinema(id).subscribe((response:any)=>{
          this.cinema=response.result;
          console.log('editing cinema is', this.cinema);
          
          this.myform=new FormGroup({
            name: new FormControl(this.cinema.name,[Validators.required]),
            address:new FormControl(this.cinema.address,[Validators.required]),
            city: new FormControl(this.cinema.city, [Validators.required]),
            mobile: new FormControl(this.cinema.mobile,[Validators.required])
          });

        })
      
      }
    })
    this.service.editCinemaRole();
  }


  onSubmit(){
    console.log(this.myform.value);

    this.activatedRoute.params.subscribe((params)=>{
      let cinemaid=params['id'];
      this.service.editCinema(cinemaid,this.myform.value).subscribe((response)=>{
        console.log(response);
        this.toastr.success('cinema updated successfully ','message from website', {timeOut:3000});
        this.router.navigate(['/cinemas']);
      })
    })
  }

  cancel(){
    this.router.navigate(['/cinemas']);
  }
}
