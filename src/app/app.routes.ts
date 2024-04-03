import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionComponent } from './mission/mission.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';

export const routes: Routes = [
  {
    path: '',
    component: MissionListComponent,
  },
  {
    path: 'mission-filter',
    component: MissionFilterComponent,
  },
  {
    path: '**',
    component: MissionListComponent,
  },
];
