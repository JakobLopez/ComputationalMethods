import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TraitFormComponent } from './component/trait-form/trait-form.component';
import { FillPipe } from './pipe/fill.pipe';
import { PunnetSquareComponent } from './component/punnet-square/punnet-square.component';

const appRoutes: Routes = [
  { path: 'TraitForm', component: TraitFormComponent },
  { path: '', component: PunnetSquareComponent },
  { path: 'PunnettSquare', component: PunnetSquareComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TraitFormComponent,
    FillPipe,
    PunnetSquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }