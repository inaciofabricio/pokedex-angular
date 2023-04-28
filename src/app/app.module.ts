import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from './app.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CollapseComponent } from './components/collapse/collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    DetalhesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
