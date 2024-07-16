import { Subject } from "rxjs";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({

  providedIn: 'root' // This makes the service available at the root level for injection
})
export class AppareilService{
    appareilSubject=new Subject<any[]>();
    private appareils=[
        {
          id:1,
          nom:"Télévision",
          etat:"éteint"
        },
        {
          id:2,
          nom:"Téléphone",
          etat:"allumé"
        },
        {
          id:3,
          nom:"Ordinateur",
          etat:"en veille"
        }
      ];

      constructor(private httpClient:HttpClient){}

      emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      };

      getAppareilById(id: number){
        const appareil=this.appareils.find(
          (appareil)=>{
            return appareil.id===id;
          }
        );
        if(appareil){
          return appareil;
        }else{
          throw new Error('Appareil inexistant !')
        }
      }

      switchOnAll(){
        for (let appareil of this.appareils){
            appareil.etat='allumé'
        }
        this.emitAppareilSubject();
      }

      switchOffAll(){
        for (let appareil of this.appareils){
            appareil.etat='éteint'
        }
        this.emitAppareilSubject();
      }

      switchOnOne(index:number){
        this.appareils[index].etat='allumé';
        this.emitAppareilSubject();
      }

      switchOffOne(index:number){
        this.appareils[index].etat='éteint';
        this.emitAppareilSubject();
      }

      addAppareil(nom:string,etat:string){
        const appareilObject={
          id:0,
          nom:'',
          etat:'',
        };
        appareilObject.nom=nom;
        appareilObject.etat=etat;
        appareilObject.id =this.appareils[(this.appareils.length-1)].id+1;
        
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
      }

      saveAppareilsToServer(){
        this.httpClient
          .put('https://http-client-demo-799ab-default-rtdb.firebaseio.com/appareils.json' , this.appareils)
          .subscribe(
            ()=>{
              console.log('Enregistrement terminer');
            },
            (error)=>{
              console.log('Erreur de sauvegarde !' + error);
            }
          )
        }

      getAppareilsFromServeur(){
        this.httpClient
        .get<any[]>('https://http-client-demo-799ab-default-rtdb.firebaseio.com/appareils.json')
        .subscribe(
          (response)=>{
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error)=>{
            console.log('Erreur de chargement !' + error );
          }
        )
      }
}