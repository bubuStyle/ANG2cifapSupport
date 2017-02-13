// Importer la class Component pour créer un composant :
import { Component } from '@angular/core';

// Définir le décorateur @Component :
@Component({
  selector: 'my-app',

  // Ajouter un fichier HTML pour la vue :
  templateUrl: 'app/components/mainCmp/app.component.html' // (Tout le chemin depuis la racine)

})

// Exporter la class du composant :
export class AppComponent  {
  name = 'Arigna';

}
