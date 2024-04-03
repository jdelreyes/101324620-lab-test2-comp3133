import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionComponent } from './mission/mission.component';

export const routes: Routes = [
  {
    path: '',
    component: MissionListComponent,
  },
  {
    path: '**',
    component: MissionListComponent,
  },
];
