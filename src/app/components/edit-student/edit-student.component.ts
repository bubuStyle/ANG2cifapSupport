import { Component, OnInit } from '@angular/core';

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
    private studentService: StudentService
  ) {}

  ngOnInit() {
  }

}