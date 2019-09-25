import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateItemComponent } from './create-item/create-item.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ModelService } from './model.service';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ViewItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
