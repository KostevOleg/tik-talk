import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.iterface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseApiUrl = 'https://icherniakov.ru/yt-course/'
  http = inject(HttpClient)
  getTestAccouts()  {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}
