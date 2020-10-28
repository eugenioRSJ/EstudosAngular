import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { MonthySalesChartComponent } from './monthy-sales-chart/monthy-sales-chart.component';
import { UserCardComponent } from './user-card/user-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';



@NgModule({
  declarations: [
    LoadingComponent,
    MonthySalesChartComponent,
    UserCardComponent,
    NavbarComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    OrderListComponent,
    NavbarComponent,
    UserCardComponent,
    LoadingComponent,
    MonthySalesChartComponent,
    OrderStatusBadgeComponent,
  ]
})
export class ComponentsModule { }
