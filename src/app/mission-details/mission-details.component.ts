import { Component, Input, numberAttribute } from '@angular/core';
import { MissionService } from '../mission.service';
import { FormsModule } from '@angular/forms';
import { Launch } from '../launch';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEarthAmericas,
  faFileLines,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './mission-details.component.html',
})
export class MissionDetailsComponent {
  public title: string = 'SpaceX Mission Details';
  public launch: Launch | null = null;

  @Input({ transform: numberAttribute, required: true })
  public flight_number: number = Number(this.route.snapshot.paramMap.get('id'));
  public faFileLines = faFileLines;
  public faEarthAmericas = faEarthAmericas;
  public faVideo = faVideo;

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
