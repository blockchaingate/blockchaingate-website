import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", loadChildren: "./modules/home/home.module#HomeModule"},
  {path: "wallet", loadChildren: "./modules/wallet/wallet.module#WalletModule"},
  {path: "trade" , loadChildren: "./modules/trade/trade.module#TradeModule"},
  {path: "market", loadChildren: "./modules/market/market.module#MarketModule"},
  {path: "explore", loadChildren: "./modules/explorer/explorer.module#ExplorerModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
