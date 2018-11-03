import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateListComponent } from './template-list/template-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { TemplateEditorComponent } from './template-details/template-editor/template-editor.component';

const routes: Routes = [
	{path: '', redirectTo: '/templates', pathMatch: 'full'},
	{path: 'templates', component: TemplateListComponent},
	{path: 'templates/:id', component: TemplateDetailsComponent},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
									TemplateListComponent,
									PageNotFoundComponent,
									TemplateDetailsComponent,
									TemplateEditorComponent
									]
