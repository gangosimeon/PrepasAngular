import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  appareils=[
    {
      nom:"Télévision",
      etat:"Eteint"
    },
    {
      nom:"Téléphone",
      etat:"Allumé"
    },
    {
      nom:"Ordinateur",
      etat:"En veille"
    }
  ];

  constructor(){
    setTimeout(() => {
        this.isAuth = true;
    }, 4000
    );
  }
  onAllumer(){
    console.log("On allume tout !");
  }
}
  