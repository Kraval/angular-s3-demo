import { HomeComponent } from '../../secure/home/home.component'
import { Routes, RouterModule } from '@angular/router';


export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
];

// { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },