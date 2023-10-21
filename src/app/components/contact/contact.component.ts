import { Email } from 'src/app/models/Email';
import { EmailService } from './../../services/email.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private emailService: EmailService){}
  loading = false;
  emailSent: boolean = false;
  emailNotSent: boolean = false;
  email = new Email();

  create(){
    this.loading = true;
    this.emailService.create(this.email)
    .subscribe(response => {
      this.email = new Email();
      let status = "";
      status = response.emailStatus;

      if(status=="SENT"){
        this.emailSent = true;
        this.emailNotSent = false;
      } else{
        this.emailSent = false;
      }
      this.loading = false;
    },
    error =>{
      this.emailNotSent = true;
      this.emailSent = false;
      this.loading = false;
    });


}
}
