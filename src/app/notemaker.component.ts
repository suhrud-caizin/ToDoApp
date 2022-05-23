import { Component, Input } from '@angular/core';
import { listService } from './list.service';

@Component({
  selector: 'app-note',
  templateUrl: './notemaker.html',
  styleUrls: ['./app.component.css'],
  providers:[listService]
})
export class NoteComponent {

  name='';
  desc='';
  dueDate!:Date;
  columns:string[]=['completed','today','tomorrow','queued'];
 
  constructor(private ls:listService) {}

  createNote(){
    
    this.ls.createNote(this.name,this.desc,new Date(this.dueDate));
console.log(this.ls.noteList);
  }

  
  

}
