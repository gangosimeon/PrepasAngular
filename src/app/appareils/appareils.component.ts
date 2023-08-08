import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit{
  @Input() appareilNom! : string;
  @Input() appareilEtat!:string;    
  constructor(){}
  ngOnInit() {
  }
  getStatus(){
    return this.appareilEtat;
  }
  getColor(): string {
    if (this.appareilEtat === 'Allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
  
 
}
