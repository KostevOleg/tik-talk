import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page';
import { SearchPageComponent } from './pages/search-page/search-page';
import { ProfilePageComponent } from './pages/profile-page/profile-page';
import { LayoutComponent } from './common-ui/layout/layout';

export const routes: Routes = [
  {path:'', component: LayoutComponent, children:[
    {path: '', component: SearchPageComponent},
    {path: 'profile', component: ProfilePageComponent},
  ]},
  {path: 'login', component: LoginPageComponent}
];
