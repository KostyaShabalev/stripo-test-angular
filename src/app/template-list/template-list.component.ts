import { Component, OnInit } from '@angular/core';

import { TemplatesService } from '../templates.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  public templates;

  constructor(
  	private _templateService: TemplatesService,
  	private router: Router
  	) { }

  ngOnInit() {

  	// this._templateService.getTemplates().subscribe(data => this.templates = data);

    this.templates = this._templateService.getTemplates();
  	this.formatDate();
  }

  onSelect(template) {

  	this.router.navigate(['/templates', template.id]);
  }

  formatDate() {
  // Function transforms date format for each template

  this.templates.forEach((template) => {
  	template.modified = this.setDate(new Date(template.modified));
  	});
  }

  setDate(date) {
  //Function transforms input date into a readable string

  return date.toDateString() + ' at ' + date.getHours() + ':' + date.getMinutes();
  }

}
