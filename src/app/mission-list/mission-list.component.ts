import { Component } from '@angular/core';
import { MissionService } from '../mission.service';
import { Launch } from '../launch';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [MissionDetailsComponent],
  templateUrl: './mission-list.component.html',
})
export class MissionListComponent {
  public title: string = 'SpaceX Mission Launch List';
  public launches: Launch[] = [];

  public constructor(private missionService: MissionService) {}

  public ngOnInit() {
    this.missionService.fetchLaunches().subscribe((response: Launch[]) => {
      this.launches = response;
    });
  }
}
