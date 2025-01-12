import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
    {
        path:"map",
        component:MapComponent,
        pathMatch:"full"
    },
    {
        path:"",
        redirectTo:"map",
        pathMatch:"full"
    },
    {
        path:"**",
        redirectTo:"map",
        pathMatch:"full"
    }
];
