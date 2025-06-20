import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoodAboutComponent } from './mood-about/mood-about.component';
import { MoodInstrumentsComponent } from './mood-instruments/mood-instruments.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { AboutFormComponent } from './about-form/about-form.component';
import { AboutCommentListComponent } from './about-comment-list/about-comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    MoodAboutComponent,
    MoodInstrumentsComponent,
    CartComponent,
    InputIntegerComponent,
    AboutFormComponent,
    AboutCommentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
