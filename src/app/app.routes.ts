import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
  { path: '', component: MissionFilterComponent },
  { path: 'mission-list', component: MissionListComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
  { path: '**', component: MissionFilterComponent },
];
