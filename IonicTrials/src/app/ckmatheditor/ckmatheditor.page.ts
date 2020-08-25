import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '../../assets/js/math/ckeditor.js';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-ckmatheditor',
  templateUrl: './ckmatheditor.page.html',
  styleUrls: ['./ckmatheditor.page.scss'],
})
export class CkmatheditorPage {
  enteredText;
  editorObject;

  public Editor = ClassicEditor;

    public model = {
        editorData: ''
    };

    public onChange( { editor }: ChangeEvent ) {
      // const data = editor.getData();
      // this.enteredText = data;
      if(this.editorObject == null){
        this.editorObject = editor;
        // const toolbarContainer = editor.ui.view.stickyPanel;
        // editor.ui.view.top.remove( toolbarContainer );
      }
  }

  constructor() {}

    onSaveClick(){
      if (this.editorObject != null) {
        const data = this.editorObject.getData();
        this.enteredText = data;
        this.model.editorData = data;
      }
    }

    onEditorResetClick(){
      this.editorObject.setData("")
    }

    onTextResetClick(){
      this.enteredText = "";
      this.model.editorData = "";
    }

}