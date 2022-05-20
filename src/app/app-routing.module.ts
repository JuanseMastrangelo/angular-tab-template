import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { MainComponent } from "./modules/main/main.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
        // loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule { }