import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletPageComponent } from './modules/wallet/components/wallet-page/wallet-page.component';


const routes: Routes = [
  {path: "wallet", loadChildren: "./modules/wallet/wallet.module#WalletModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
