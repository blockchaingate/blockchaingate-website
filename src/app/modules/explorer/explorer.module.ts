import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { ExplorerRoutingModule } from './explorer-routing.module';



@NgModule({
  declarations: [ExplorePageComponent],
  imports: [
    CommonModule,
    ExplorerRoutingModule
  ]
})
export class ExplorerModule { }
