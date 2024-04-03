import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MissionListComponent} from "./mission-list/mission-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
