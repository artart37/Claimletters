import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Eager loading feature modules (simple and routing)
import { MainModule } from './main/modules/main.module';
//Root routing
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
//General Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  
  imports: [
    //General
    BrowserModule,
    BrowserAnimationsModule,
    //Eager Feature modules
    MainModule,
    //Root routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }