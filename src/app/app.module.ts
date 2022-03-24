import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Eager loading feature modules (simple and routing)
import { HeaderModule } from './header/modules/header.module';
import { HomeModule } from './home/modules/home.module';
//Root routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//General Components
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],

  imports: [
    //General
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Eager Feature modules
    HeaderModule,
    HomeModule,
    //Root routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
