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
import { ShowContent1Component } from './components/show-content1/show-content1.component';
import { ShowContent2Component } from './components/show-content2/show-content2.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HexagonoComponent } from './components/hexagono/hexagono.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { SecaoDadosConsumoComponent } from './components/secao-dados-consumo/secao-dados-consumo.component';
import { Hexagono2Component } from './components/hexagono2/hexagono2.component';
import { DividerComponent } from './components/divider/divider.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    BannerComponent,
    ServicosComponent,
    CarouselComponent,
    ShowContent1Component,
    ShowContent2Component,
    Footer1Component,
    Footer2Component,
    HexagonoComponent,
    CardCarouselComponent,
    SecaoDadosConsumoComponent,
    Hexagono2Component,
    DividerComponent,
  ],
  imports: [
    FeaturesComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
