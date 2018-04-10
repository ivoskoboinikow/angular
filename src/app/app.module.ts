import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule  } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
          BrowserModule,
          FormsModule,
          HttpModule,
          AuthModule,
          AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
