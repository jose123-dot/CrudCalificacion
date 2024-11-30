import { Routes } from '@angular/router';
import { Page404ErrorComponent } from './page404-error/page404-error.component';

export const routes: Routes = [
  {
    path: 'estudiante',
    loadChildren: () =>
      import('../app/modules/Estudiante/estudiante.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'asignatura',
    loadChildren: () =>
      import('../app/modules/asignatura/asignatura.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'maestro',
    loadChildren: () =>
      import('../app/modules/maestro/maestro.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/modules/dashboard/dashboard.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];
