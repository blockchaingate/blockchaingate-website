import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradePageComponent } from './components/trade-page/trade-page.component';


const routes: Routes = [
  {path: "", component: TradePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
