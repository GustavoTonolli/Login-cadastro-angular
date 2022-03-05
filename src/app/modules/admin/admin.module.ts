import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ServicesComponent } from './components/cadastrar/services.component';
import { AboutComponent } from './components/consultar/about.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, UsuariosComponent, ServicesComponent, AboutComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
