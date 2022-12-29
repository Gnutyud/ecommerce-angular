import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from "swiper/angular";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderSwiperComponent } from './pages/home/header-swiper/header-swiper.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from './pages/home/header-swiper/banner/banner.component';
import { ShippingAreaComponent } from './pages/home/shipping-area/shipping-area.component';
import { ProductItemComponent } from './pages/home/product-section/product-item/product-item.component';
import { ProductSectionComponent } from './pages/home/product-section/product-section.component';
import { ProductSliderComponent } from './pages/home/product-section/product-slider/product-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HeaderSwiperComponent,
    BannerComponent,
    ShippingAreaComponent,
    ProductItemComponent,
    ProductSectionComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
