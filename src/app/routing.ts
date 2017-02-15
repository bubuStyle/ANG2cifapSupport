// Importer les class nécessaires à l'utilisation des routes :
import { ModuleWithProviders } from '@angular/core'; // En UpperCamelCase
import { Routes, RouterModule } from '@angular/router';

// Importer les composants à utiliser dans les routes :
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

// Déclarer une constante de type Routes = variable non modifiable :
const appRoutes: Routes = [

    // Définition des routes :
    {
        // Redirection de la page d'accueil :
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        // Définir l'adresse :
        path: 'dashboard',
        // Définir le composants à utiliser :
        component: DashboardComponent
    },

    {
        // Définir l'adresse :
        path: 'add-student',
        // Définir le composants à utiliser :
        component: AddStudentComponent
    },

    {
        // Définir l'adresse dynamique :
        path: 'edit-student/:id',
        // Définir le composants à utiliser :
        component: EditStudentComponent
    }

];

// Exporter la constante des routes :
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);