import { Component} from '@angular/core';
// import { ProfileCard } from './common-ui/profile-card/profile-card';
// import { ProfileService } from './data/services/profile';
// import { Profile } from './data/interfaces/profile.iterface';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
