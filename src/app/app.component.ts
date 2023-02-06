import { Component } from '@angular/core';
import { CountserviceService } from './Services/countservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';

  constructor(public _countservice : CountserviceService){}
  
  users = Array<any>();
  admins = Array<any>();
  onUserCreate(user:any){
    this.users.push(user);
  }

  onAdminCreate(admin:any){
    this.admins.push(admin);
  }
  
  check():void {
    console.log(this.users.length);
  }

  removeUser(index:number) : void{
    this.users.splice(index,1);
    this._countservice.usercount -=1;
  }

  removeAdmin(index:number) : void{
    this.admins.splice(index,1);
    this._countservice.admincount -=1;
  }
}
