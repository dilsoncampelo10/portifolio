import { Injectable } from '@angular/core';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private request:HttpClient) { }

  private url: string = 'https://micromail-ht69.onrender.com/emails';

  create(obj:Email):Observable<Email>{
      return this.request.post<Email>(this.url,obj);
  }
}
