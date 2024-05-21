import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { CardLineChartComponent } from './components/card-line-chart/card-line-chart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BillsComponent } from './components/bills/bills.component';
import { MangeCatComponent } from './components/mange-cat/mange-cat.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { addtokenInterceptor } from './addtoken-intercepteur';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    CardLineChartComponent,
    CategoriesComponent,
    BillsComponent,
    MangeCatComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [
    [provideHttpClient(withInterceptors([addtokenInterceptor]))]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
