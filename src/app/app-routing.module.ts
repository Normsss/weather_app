import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from './homepage/weather-form/city-details/city-details.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:"city-details", component: CityDetailsComponent},
  {path:"home", component: HomepageComponent},
  {path:"", component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
