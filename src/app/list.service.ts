import { Component, Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

// import{List}


export class Note{
  id:number=0;
  name:string='';
  desc:string='';
  status:'done'|'pending'='pending';
  dueDate!:Date;

}
@Injectable(
//   {
//   providedIn:'root'
// }
)
export class listService {
  id:number=0;
  noteList:Note[]=[];
  /**
   *
   */

  createNote(name:string,desc:string,dueDate:Date):void{
    let n:Note=new Note();
    n.name=name;
    n.desc=desc;
    n.dueDate=dueDate;
    n.id=++this.id;
      this.noteList.push(n);
      console.log('success list serv');

  }
  getTodayDueNotes():Note[]{
      return this.noteList.filter(elem=>elem.dueDate.toDateString()==new Date().toDateString()).filter(ele=>ele.status=='pending')

  }
  markCompleted(id:number){
                this.noteList.find(elem=>elem.id==id)!.status="done";
  }
  removeNote(id:number){
    this.noteList=this.noteList.filter(elem=>elem.id!=id);
}
  getCompleted():Note[]{
      return this.noteList.filter(elem=>elem.status=="done");
  }
  getQueued():Note[]{
    return this.noteList.filter(elem=>elem.status=='pending')
  }
  getTomDueNotes():Note[]{
    return this.noteList.filter(elem=>this.dateDiffDays(elem.dueDate,new Date())).filter(elem=>elem.status=="pending");
     
  }
  dateDiffDays(date1:Date,date2:Date):boolean{

      if(date1.toDateString()===date2.toDateString()){
        console.log("inside if condn"+date1+" "+date2);  
        return false

      }
    let diff = Math.abs(date1.getTime() - date2.getTime());
    console.log(date1.getTime()+" "+date2.getTime());  
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    diffDays;
    console.log(date1+""+date2+""+diffDays);
    return diffDays==1;
  }


}
