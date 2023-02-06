import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountserviceService {

  usercount : number = 0;
  admincount : number = 0;

}
