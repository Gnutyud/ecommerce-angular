import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductService } from './core/services/product.service';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { BannerComponent } from './pages/home/header-swiper/banner/banner.component';
import { HeaderSwiperComponent } from './pages/home/header-swiper/header-swiper.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductItemComponent } from './pages/home/product-section/product-item/product-item.component';
import { ProductSectionComponent } from './pages/home/product-section/product-section.component';
import { ProductSliderComponent } from './pages/home/product-section/product-slider/product-slider.component';
import { ShippingAreaComponent } from './pages/home/shipping-area/shipping-area.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductGalleryComponent } from './pages/product-detail/product-gallery/product-gallery.component';
import { ProductTabInfoComponent } from './pages/product-detail/product-tab-info/product-tab-info.component';
import { ProductTabDescriptionComponent } from './pages/product-detail/product-tab-info/tabs/product-tab-description/product-tab-description.component';
import { ProductTabReviewComponent } from './pages/product-detail/product-tab-info/tabs/product-tab-review/product-tab-review.component';
import { ProductTabSpecificationComponent } from './pages/product-detail/product-tab-info/tabs/product-tab-specification/product-tab-specification.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { TableComponent } from './shared/components/table/table.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
// Import the library
import { SwiperModule } from 'swiper/angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './pages/cart/cart.component';
import { MiniCartComponent } from './shared/components/mini-cart/mini-cart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ShopComponent } from './pages/shop/shop.component';
import { OutsideClickDirective } from './shared/directive/outside-click.directive';

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
    ProductSliderComponent,
    ProductDetailComponent,
    BreadcrumbComponent,
    ProductGalleryComponent,
    ProductTabInfoComponent,
    ProductTabDescriptionComponent,
    ProductTabSpecificationComponent,
    ProductTabReviewComponent,
    WishlistComponent,
    TableComponent,
    ProductDetailsComponent,
    CartComponent,
    MiniCartComponent,
    PageNotFoundComponent,
    ShopComponent,
    OutsideClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Third party libs
    SwiperModule,
    NgxPaginationModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
