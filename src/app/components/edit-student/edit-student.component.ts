import { Component, OnInit } from '@angular/core';

// Importer la class du Router :
import { Router, ActivatedRoute, Params } from '@angular/router';

// 1) Importer la class du service :
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',

  // 2) Ajouter le service dans le tableau des providers :
  providers: [StudentService]
})

export class EditStudentComponent implements OnInit {

  // 3) Définir une variable pour utiliser le service :
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // Créer un objet vide :
  selectedStudent = {
    id: 0,
    firstName: '',
    lastName: '',
    state: 0 // Le type number ne peut pas être vide
  };

  // Créer une FAKE-fonction pour MAJ l'étudiant sélectionné :
  editSelectedStudent() {
    // Renvoyer l'utilisateur vers la vue Dashboard :
    this.router.navigateByUrl('/dashboard');
  };

  // Créer une fonction pour récup les infos de l'étudiant sélectionné :
  getSelectedStudentData(id) {
    this.studentService.getSelectedStudentInfo(id).then(data => this.selectedStudent = data);
  };

  ngOnInit() {
    // Récup le param :id de la route :
    this.activatedRoute.params.forEach(
      params => {
        let id = +params['id'];
        this.getSelectedStudentData(id);
      }
    )
  }

}