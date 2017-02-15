// Importer la class pour configurer un service :
import { Injectable } from '@angular/core';

// Importer les class Http et Headers :
import { Http, Headers } from '@angular/http';

// Importer le système de promesse :
import 'rxjs/add/operator/toPromise';

// Créer et exporter une collection de données :
export const LIST = [
  {
    firstName: 'Georges',
    lastName: 'Harrison',
    state: 1
  },
  {
    firstName: 'Paul',
    lastName: 'McCartney',
    state: 0
  },
  {
    firstName: 'John',
    lastName: 'Lennon',
    state: 2
  },
  {
    firstName: 'Ringo',
    lastName: 'Starr',
    state: 0
  }
];

// Utiliser le décorateur @Injectable :
@Injectable()

// Exporter la class du service :
export class StudentService {

  constructor(
    // Créer une variable de type Http :
    private http: Http
  ) {}

  // Créer une fonction pour envoyer la liste des étudiants :
  showStudentList(): Promise<any[]>{

    // Renvoyer le contenu de LIST :
    return Promise.resolve(LIST);

  }

}