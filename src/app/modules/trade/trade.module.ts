import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradePageComponent } from './components/trade-page/trade-page.component';
import { TradeRoutingModule } from './trade-routing.module';



@NgModule({
  declarations: [TradePageComponent],
  imports: [
    CommonModule,
    TradeRoutingModule
  ]
})
export class TradeModule { }
