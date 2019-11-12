import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketPageComponent } from './components/market-page/market-page.component';


const routes: Routes = [
  {path: "", component: MarketPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
