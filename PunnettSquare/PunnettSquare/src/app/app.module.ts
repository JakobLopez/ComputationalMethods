import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TraitFormComponent } from './trait-form/trait-form.component';
import { FillPipe } from './fill.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TraitFormComponent,
    FillPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
