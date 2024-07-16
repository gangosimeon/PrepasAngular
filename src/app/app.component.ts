import { Component , OnInit ,OnDestroy} from '@angular/core';
import { Observable ,interval,Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  second !:number;
  counterSouscription!:Subscription;
  constructor(){}
  ngOnInit(){
    const counteur = interval(1000);
    this.counterSouscription=counteur.subscribe(
      (value:number)=>{
        this.second=value;
      }
    )
  }
  ngOnDestroy(){
    this.counterSouscription.unsubscribe();
  }
}
  