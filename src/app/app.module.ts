import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndicesComponent } from './components/indices/indices.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AuthService } from './services/auth.service';
import { WalletService } from './services/wallet.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminWalletComponent } from './components/admin-wallet/admin-wallet.component';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent,
    InicioComponent,
    UserChartComponent,
    DashboardComponent,
    IndicesComponent,
    WalletComponent,
    AdminWalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthService,WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
