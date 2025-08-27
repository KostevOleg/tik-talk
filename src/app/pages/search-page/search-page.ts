import { Component,  inject } from '@angular/core';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';
import { ProfileService } from '../../data/services/profile';
import { Profile } from '../../data/interfaces/profile.iterface';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  standalone: true,
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPageComponent {
  // protected readonly title = signal('tik-talk');
  profileService = inject(ProfileService);
  profiles: Profile[] = []
  constructor() {
    this.profileService.getTestAccouts().subscribe(
      data => {
        this.profiles = data
      }
    )
  }
}
