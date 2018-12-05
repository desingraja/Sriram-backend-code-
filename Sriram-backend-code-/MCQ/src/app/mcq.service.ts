import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MCQService {
  private baseurl:String = "http://localhost:3000";
  constructor(private http:HttpClient) { }
// READ
  read(){
    
    return this.http.get(this.baseurl+'/getquestion');
  }

//  CREATE
   create(Qno,question,option1,option2,option3,option4,keyanswer){
    var z = {
      qid:Qno,
      question:question,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      keyAnswer:keyanswer    
      
    }
      console.log("Service:"+z);
  return this.http.post(this.baseurl+'/createquestion',z);
   
}
// UPDATE
update(Qno,question,option1,option2,option3,option4,keyanswer){
  var z1 = {
    question_id:Qno,
    question:question,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    keyAnswer:keyanswer    
    
  }
    console.log("Service:"+z1);
return this.http.put(this.baseurl+'/updatequestion',z1);
 
}

// DELETE

delete(Qno){
  var del:any = {
    question_id:Qno 
    
  }
    console.log("Service:"+del);
return this.http.delete(this.baseurl+'/deletequestion',del);
 
}
}



