import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';


const routes: Routes = [
  {path: "", component: ExplorePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule { }
