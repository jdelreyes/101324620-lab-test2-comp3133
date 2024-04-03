import { Component, Input, numberAttribute } from '@angular/core';
import { Launch } from '../launch';
import { MissionService } from '../mission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [],
  templateUrl: './mission-filter.component.html',
})
export class MissionFilterComponent {
  public title: string = 'SpaceX Mission Filter';
  public launches: Launch[] = [];
  public hasFilter: boolean = true;

  constructor(private missionService: MissionService, private router: Router) {}

  ngOnInit() {
    this.hasFilter = false;
    this.missionService.fetchLaunches().subscribe((response: Launch[]) => {
      this.launches = response;
    });
  }

  yearOnChange(year: number) {
    this.hasFilter = true;

    this.missionService
      .fetchLaunchesByYear(year)
      .subscribe((response: Launch[]) => {
        this.launches = response;
      });
  }

  removeFilter() {
    this.hasFilter = false;
    this.missionService.fetchLaunches().subscribe((response: Launch[]) => {
      this.launches = response;
    });
  }
}
