import { Component,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { ActivatedRoute } from '@angular/router'
@Component({ 
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  nom!: string;
  etat!: string;

  constructor(private appareilService:AppareilService,
              private route:ActivatedRoute){}
  
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nom=this.appareilService.getAppareilById(+id).nom;
    this.etat=this.appareilService.getAppareilById(+id).etat;
  }
}
