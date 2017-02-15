import { Component, OnInit } from '@angular/core';

// 1) Importer la class du service :
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',

  // 2) Ajouter le service dans le tableau des providers :
  providers: [StudentService]

})
export class AddStudentComponent implements OnInit {

  // Créer un objet vide qui reprend la structure des objets du service :
  newStudent = {
    id: 0,
    firstName: '',
    lastName: '',
    state: 0 // Le type number ne peut pas être vide
  };

  // Créer une variable pour récup la taille de la liste d'étudiants :
  myListLength;

  // 3) Définir une variable pour utiliser le service :
  constructor(
    private studentService: StudentService
  ) {}

  // Créer une fonction pour vider le formulaire :
  resetInput(){
    // Annuler la modification de l'objet par l'utilisateur :
    this.newStudent = {
      id: 0,
      firstName: '',
      lastName: '',
      state: 0 // Le type number ne peut pas être vide
    };
  }

  // Créer une fonction pour ajouter un étudiant dans la liste du service :
  addNewStudent(object){
    // Appeler la fonction du service en lui envoyant un nouvel objet :
    this.studentService.addStudentInStudentList(object);

    // Vider le formulaire :
    this.resetInput();

    // Actualiser la valeur de la taille de tableau LIST :
    this.getNextStudentId();
  };

  // Créer une fonction pour connaitre la taille du tableau LIST du service :
  getNextStudentId(){
    this.studentService.getListLength().then( number => this.newStudent.id = number );
  };

  ngOnInit() {
    // Connaitre la taille du tableau LIST au chargement du composant :
    this.getNextStudentId();
  };

}