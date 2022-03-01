import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalInfoComponent } from './components/animal-info/animal-info.component';
import { CreateAnimalComponent } from './components/create-animal/create-animal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  // { path: '**',   component: DashboardComponent },
  {
    path: 'info/:id',
    component: AnimalInfoComponent
  },
  {
    path: 'create',
    component: CreateAnimalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
