import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTravelComponent } from './components/add-travel/add-travel.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'travel_list', pathMatch: 'full' },
  { path: 'add_travel', component: AddTravelComponent },
  { path: 'travel_list', component: TravelListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
