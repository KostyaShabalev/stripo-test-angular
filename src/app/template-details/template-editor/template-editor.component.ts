import { Component, OnInit, Output, Input, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {

  @Input() public elemToEdit;

	@Output() public editCancel = new EventEmitter();
  @Output() public editedTemplate = new EventEmitter();

  public templateChanges = {
      "text": '',
      "fontSize": ''
    };

   public textArea;
   public fontSize;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.textArea = this.elementRef.nativeElement.querySelector('.input-text');
    this.textArea.value = this.elemToEdit.innerHTML.trim();

    this.fontSize = this.elementRef.nativeElement.querySelector('.font-size');

    const fontSizeStr = getComputedStyle(this.elemToEdit).fontSize;

    this.fontSize.value = Math.floor(parseInt(fontSizeStr.substr(0, fontSizeStr.length - 2)));

  }

  onCancel() {
  	this.editCancel.emit(false);
  }

  onSaveChanges() {

    this.templateChanges.text = this.textArea.value;
    this.templateChanges.fontSize = this.fontSize.value;
    this.editedTemplate.emit(this.templateChanges);
    this.onCancel();
  }



}
