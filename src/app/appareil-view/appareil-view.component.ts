import { Component } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent {
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
  appareilSubscription!:Subscription;

  constructor(private appareilService:AppareilService){
    setTimeout(() => {
        this.isAuth = true;
    }, 4000
    );
  }

  ngOnInit(){
    this.appareilSubscription=this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=>{
        this.appareils=appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  
  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }

  onSave(){
    this.appareilService.saveAppareilsToServer();
  }
  onGet(){
    this.appareilService.getAppareilsFromServeur();
  }
}
