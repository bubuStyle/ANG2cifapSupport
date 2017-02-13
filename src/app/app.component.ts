// Importer la class Component pour créer un composant :
import { Component } from '@angular/core';

// Définir le décorateur @Component :
@Component({
  selector: 'my-app',
  template: `
  
    <h1>Hello {{name}}, how are you ?</h1>`,
  styles: [`
    h1{
      color:red;
      margin: 0;
      text-transform: uppercase;
    }
  `]
})

// Exporter la class du composant :
export class AppComponent  {
  name = 'Arigna';
}
