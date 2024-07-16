export class AppareilService{
    appareils=[
        {
          nom:"Télévision",
          etat:"éteint"
        },
        {
          nom:"Téléphone",
          etat:"allumé"
        },
        {
          nom:"Ordinateur",
          etat:"en veille"
        }
      ];
      switchOnAll(){
        for (let appareil of this.appareils){
            appareil.etat='allumé'
        }
      }

      switchOffAll(){
        for (let appareil of this.appareils){
            appareil.etat='éteint'
        }
      }

      switchOnOne(index:number){
        this.appareils[index].etat='allumé';
      }

      switchOffOne(index:number){
        this.appareils[index].etat='éteint';
      }
}