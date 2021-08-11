import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { StartComponent } from "./start/start.component";
import { EndComponent } from "./end/end.component";

const routes: Routes = [
  {path: 'main/:name', component: MainComponent},
  {path: 'end/:lives', component: EndComponent},
  {path: 'start', component:StartComponent},
  {path: '', component: StartComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
