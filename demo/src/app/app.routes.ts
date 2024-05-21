import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SzamTippComponent } from './szam-tipp/szam-tipp.component';
import { StopperComponent } from './stopper/stopper.component';
import { KoPapirOlloComponent } from './ko-papir-ollo/ko-papir-ollo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'szamTipp', component: SzamTippComponent },
    { path: 'stopper', component: StopperComponent },
    { path: 'koPapirOllo', component: KoPapirOlloComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }