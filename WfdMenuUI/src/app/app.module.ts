import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuService } from './menu/menu.service';
import { MenulistComponent } from './menu/menulist.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
// map '/menu' to the item list component
  { path: 'items', component: MenulistComponent },

// map '/' to '/menu' as our default route
  { path: '', redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

