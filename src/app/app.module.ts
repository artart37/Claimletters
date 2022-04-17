import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Eager loading feature modules (simple and routing)
import { HeaderFooterModule } from './static/header-footer/header-footer.module';
import { HomeModule } from './pages/home/modules/home.module';
//Root routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],

  imports: [
    //General
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Eager Feature modules
    HeaderFooterModule,
    HomeModule,
    //Root routing
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
