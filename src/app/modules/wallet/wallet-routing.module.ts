import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletPageComponent } from './components/wallet-page/wallet-page.component';


const routes: Routes = [
  {path: "", component: WalletPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
