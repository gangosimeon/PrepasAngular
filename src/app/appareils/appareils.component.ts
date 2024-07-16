import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit{
  @Input() appareilNom! : string;
  @Input() appareilEtat!:string;
  @Input() appareilIndex!:number;
  @Input() appareilId!:number;
  constructor(private appareilService:AppareilService){}
  ngOnInit() {
  }

  getStatus(){
    return this.appareilEtat;
  }

  getColor():string{
    if (this.appareilEtat === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.appareilIndex);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.appareilIndex);
  }

}
