import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    BannerComponent,
    ServicosComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
