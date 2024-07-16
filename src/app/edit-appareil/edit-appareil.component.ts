import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  
  defaultOnOff="éteint";
  
  constructor(private appareilService:AppareilService,private router:Router){}
  ngOnInit(){
  }
  onSubmit(form:NgForm){
    const nom=form.value['nom'];
    const etat=form.value['etat'];
    this.appareilService.addAppareil(nom,etat);
    this.router.navigate(['/appareils'])
  }

}
