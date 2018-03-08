import { LoginComponent } from '../../public/login/login.component'
import { NotFoundComponent } from '../../components/not-found/not-found.component'
import { Routes, RouterModule } from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'notfound', component:NotFoundComponent}
];