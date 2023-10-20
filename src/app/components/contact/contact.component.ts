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

  emailSent: boolean = false;
  emailNotSent: boolean = false;
  email = new Email();

  create(){

    this.emailService.create(this.email)
    .subscribe(response => {
      let status = "";
      status = response.emailStatus;

      if(status=="SENT"){
        this.emailSent = true;
      } else{
        this.emailSent = false;
      }

    },
    error =>{
      this.emailNotSent = true;
    });


}
}
