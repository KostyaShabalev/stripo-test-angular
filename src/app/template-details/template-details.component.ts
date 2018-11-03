import { Component, OnInit, ElementRef } from '@angular/core';

import {TemplatesService} from '../templates.service';

import {ActivatedRoute} from '@angular/router';

import { TemplateEditorComponent } from './template-editor/template-editor.component';


@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {

	public isEditPanelVisible = false;
  public templates;
  public templateId;
  public templateToShow;
  public stripeToEdit;

  constructor(
  	private _templateService: TemplatesService,
  	private route: ActivatedRoute,
    private elementRef: ElementRef
  	) { }

  ngOnInit() {

  	// this._templateService.getTemplates().subscribe(data => this.templates = data);

    this.templates = this._templateService.getTemplates();
  	this.templateId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  	this.templates.forEach(currTemplate => {
      if (currTemplate.id === this.templateId) {
        this.templateToShow = currTemplate;
      }
    });
    console.log();
  }

  ngAfterViewInit() {
    const editableElements = Array.from(this.elementRef.nativeElement.querySelectorAll('.template .editable'));
    editableElements.forEach((editableElement: any) => {
      editableElement.addEventListener('click', this.onEditableClick);
    });
  }

  onEditableClick = ({target}) => {

    this.stripeToEdit = target;
    this.isEditPanelVisible = true;
  }

  renderSavedStripe(updatedStripe) {
    
    this.stripeToEdit.innerHTML = updatedStripe.text;
    this.stripeToEdit.style.fontSize = updatedStripe.fontSize + 'px';
    
  }

}
