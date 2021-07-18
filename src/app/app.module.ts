import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Eager loading feature modules (simple and routing)
import { HeaderModule } from './header/modules/header.module';
import { MainModule } from './main/modules/main.module';
//Root routing
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
//General Components
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComponents,
  ],
  
  imports: [
    //General
    BrowserModule,
    BrowserAnimationsModule,
    //Eager Feature modules
    HeaderModule,
    MainModule,
    //Root routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }