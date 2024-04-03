import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MissionService } from '../mission.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [],
  templateUrl: './mission-list.component.html',
})
export class MissionListComponent {
  public title: string = 'SpaceX Mission Launch List';
  public launches: Launch[] = [];

  public constructor(private missionService: MissionService) {}

  ngOnInit() {
    this.missionService.getLaunches().subscribe((response: Launch[]) => {
      this.launches = response;
    });
  }
}
