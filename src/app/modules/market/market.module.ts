import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { MarketRoutingModule } from './market-routing.module';



@NgModule({
  declarations: [MarketPageComponent],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
