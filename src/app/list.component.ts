import { Component, Input } from '@angular/core';
import { listService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './app.list.html',
  styleUrls: ['./app.component.css'],
  // providers:[listService]
})
export class ListComponent {
  title = 'angular-todos';
  name='';
  desc='';
  dueDate!:Date;
  @Input() columnName!:string;
  /**
   *
   */
  constructor(private ls:listService) {}
  getCompleted(){
      return this.ls.getCompleted();
  }
  getTodayDueNotes(){
      return this.ls.getTodayDueNotes();
  }
  getTomDueNotes(){
      return this.ls.getTomDueNotes();
  }
  markDone(id:number){
      
        this.ls.markCompleted(id);
  }
  isIncomplete(id:number):boolean{
   
    return  this.ls.noteList.find(elem=>elem.id==id)?.status=="pending";
  }
  createNote(){
    
    this.ls.createNote(this.name,this.desc,new Date(this.dueDate));

  }
  getList(){

    if(this.columnName=='today'){
     return  this.ls.getTodayDueNotes();
    }
    else if (this.columnName=='tomorrow') {
      return this.ls.getTomDueNotes();
    }
    else if(this.columnName=='completed'){
      return this.ls.getCompleted();
    }
    else if(this.columnName=='queued') {
      return this.ls.getQueued();
    }
    else
    return [];
  }
  removeNote(id:number){
    this.ls.removeNote(id);
  }
  

}
