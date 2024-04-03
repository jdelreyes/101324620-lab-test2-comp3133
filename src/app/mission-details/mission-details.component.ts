import { Component, Input, numberAttribute } from '@angular/core';
import { MissionService } from '../mission.service';
import { FormsModule } from '@angular/forms';
import { Launch } from '../launch';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mission-details.component.html',
})
export class MissionDetailsComponent {
  public title: string = 'SpaceX Mission Details';
  public launch: Launch | null = null;

  @Input({ transform: numberAttribute, required: true })
  public flight_number: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.missionService
      .fetchLaunch(this.flight_number)
      .subscribe((response) => {
        this.launch = response;
      });
  }
}
