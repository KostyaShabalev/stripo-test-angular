import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateListComponent } from './template-list/template-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { TemplateEditorComponent } from './template-details/template-editor/template-editor.component';

import { TemplatesService } from './templates.service';

// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [TemplatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
