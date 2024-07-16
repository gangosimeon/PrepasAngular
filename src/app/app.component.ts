import { Component , OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

import {  AppareilService } from "./services/appareil.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth =false;
  derniereDate = new Promise(
    (resolve,reject)=>{
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date);
        },2000
      );
    }
  );
 
  appareils!:any[];

  constructor(private appareilService:AppareilService){
    setTimeout(() => {
        this.isAuth = true;
    }, 4000
    );
  }

  ngOnInit(){
    this.appareils=this.appareilService.appareils
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }
}
  