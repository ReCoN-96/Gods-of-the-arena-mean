import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FighterCreateComponent } from './components/fighter-create/fighter-create.component';
import { FighterListComponent } from './components/fighter-list/fighter-list.component';
import { FighterEditComponent } from './components/fighter-edit/fighter-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-fighter' },
  { path: 'create-fighter', component: FighterCreateComponent },
  { path: 'edit-fighter/:id', component: FighterEditComponent },
  { path: 'fighters-list', component: FighterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
