import { Component, EventEmitter, Output } from '@angular/core';
import { CountserviceService } from '../Services/countservice.service';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css'],
})
export class ChildoneComponent {
  @Output() user = new EventEmitter<String>();
  @Output() admin = new EventEmitter<String>();
  uname: string= '';
  aname: string = '';

  constructor(public _countservice: CountserviceService) {}

  userCreate(username: string): void {
    if (username.length > 0) {
      this._countservice.usercount += 1;
      this.user.emit(username);
    }
    this.uname = '';
  }

  adminCreate(adminname: string): void {
    if (adminname.length > 0) {
      this._countservice.admincount += 1;
      this.admin.emit(adminname);
    }
    this.aname = '';
  }
}
