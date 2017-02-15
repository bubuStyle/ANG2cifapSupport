// Importer la class pour configurer un service :
import { Injectable } from '@angular/core';

// Importer les class Http et Headers :
import { Http, Headers } from '@angular/http';

// Importer le système de promesse :
import 'rxjs/add/operator/toPromise';

// Créer et exporter une collection de données :
export const LIST = [
  {
    id: 0,
    firstName: 'Georges',
    lastName: 'Harrison',
    state: 1
  },
  {
    id: 1,
    firstName: 'Paul',
    lastName: 'McCartney',
    state: 0
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Lennon',
    state: 2
  },
  {
    id: 3,
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

  // Créer une fonction pour ajouter un étudiant dans la liste :
  addStudentInStudentList(object){

    // Ajouter le nouvel étudiant dans le tableau :
    LIST.push(object);

  };

  // Créer une fonction pour connaitre la taille du tableau LIST :
  getListLength(): Promise<number>{
    return Promise.resolve(LIST.length);
  };

};