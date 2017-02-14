// Importer les class pour configurer le module :
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Importer le module des routes :
import { Routing } from './routing';

// Importer le composant principal :
import { AppComponent } from './app.component';

// Importer les composants de l'application (page) :
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HeaderComponent } from './directives/header/header.component';
import { FooterComponent } from './directives/footer/footer.component';

@NgModule({
  // Ajouter tous les composants dans le tableau des déclarations :
  declarations: [
    AppComponent,
    DashboardComponent,
    AddStudentComponent,
    EditStudentComponent,
    HeaderComponent,
    FooterComponent
  ],

  // Ajouter les modules dans le tableau des imports :
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Ajouter la class des routes :
    Routing
  ],
  providers: [],

  // Ajouter le composant principal dans le tableau bootstrap :
  bootstrap: [AppComponent]
})
export class AppModule { }
