import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePgeComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/seach-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    HomePgeComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePgeComponent,
    SearchBoxComponent,
    CardComponent
  ]
})
export class GifsModule { }
