import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminService } from './services/getAdmin/admin.service';
import { AdmintableComponent } from './components/admintable/admintable.component';
import { AddFormComponent } from './add-form/add-form.component';

import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    AdmintableComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
