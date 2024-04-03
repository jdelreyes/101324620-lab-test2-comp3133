import { Component, Input, numberAttribute } from '@angular/core';
import { Launch } from '../launch';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [],
  templateUrl: './mission-filter.component.html',
})
export class MissionFilterComponent {
  public title: string = 'Mission Filter';
  public launches: Launch[] = [];

  constructor(private missionService: MissionService) {}

  ngOnInit() {
    this.missionService.fetchLaunches().subscribe((response: Launch[]) => {
      this.launches = response;
    });
  }
}
