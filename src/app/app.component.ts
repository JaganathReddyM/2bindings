import { Component } from '@angular/core';
import { UserData } from "./UserData";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2bindings';
  udata : UserData = new UserData();
  userList : UserData[]=[];           // Array of UserData Objects
  //userDetails : string[]= [];
  themeName:string='ocean';       //themeName model or method
  col:string='orange';
  size:number=100;
  firstName : string='Jaganath';
  lastName : string='Reddy';
  enableDisable : boolean=true;
  stateName : string = "AP";
  saveData(event:Event){
    this.userList.push(this.udata);
    //this.userDetails.push(this.lastName);
    console.log("Added data to the array....");
    console.log(this.udata);
    this.udata = new UserData();
  }
  checkData(){
    //console.log(event.target);
    console.log("Length of FirstName :"+this.udata.firstName.length);
  }
  sendData(){
    console.log("Sending data to Express Backend");
    //Code for validation
    //Code for communicating with backend
  }
}
