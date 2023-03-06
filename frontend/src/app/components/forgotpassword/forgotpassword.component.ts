import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private service:AppServiceService,private router:Router,private toastr:ToastrService){

  }

  onSubmit(form:any){
    console.log(form.value);

    this.service.sendEmail(form.value).subscribe((response:any)=>{
      console.log(response);

      if(response.message!=null){
        this.toastr.success(response.message,'message from website',{timeOut:3000});
        this.router.navigate(['/login']);
      }
      else{
        this.toastr.error(response.error,'message from website',{timeOut:3000});
      }
    })
  }

}
