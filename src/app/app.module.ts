import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatStepperModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GenerateDataComponent } from './generate-data/generate-data.component';
import { ConnectComponent } from './generate-data/connect/connect.component';
import { SelectTableComponent } from './generate-data/select-table/select-table/select-table.component';
import {MatTableModule} from '@angular/material/table';
import {Service} from './service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';
import { Actions, EffectsModule} from "@ngrx/effects";
import { HttpClientModule} from '@angular/common/http';
import {tableReducer} from './store/table-details/table-details.reducer'; 
import {TableEffect} from './store/table-details/table-details.effects';
import {TestDialogComponent} from './generate-data/connect/connect.dialog.template';
import { SelectColumnComponent } from './generate-data/select-column/select-column.component';
import { kerpowReducer } from './store/selector';
import { TestDataEffect } from './store/test-data/test-data.effects';
import { ConfirmDataComponent } from './generate-data/confirm-data/confirm-data.component';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    GenerateDataComponent,
    ConnectComponent,
    SelectTableComponent,
    SelectColumnComponent,
    TestDialogComponent,
    ConfirmDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(kerpowReducer),
    EffectsModule.forRoot([]),
    StoreModule.forFeature("kerpow",kerpowReducer),
    EffectsModule.forFeature([TableEffect, TestDataEffect]),
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument(),
    MatFormFieldModule, MatInputModule,MatCardModule,MatTableModule,MatIconModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  entryComponents:[TestDialogComponent]
})
export class AppModule { }
