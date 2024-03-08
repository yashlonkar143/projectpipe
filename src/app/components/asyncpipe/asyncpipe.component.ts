import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrl: './asyncpipe.component.css'
})
export class AsyncpipeComponent {

  /*
  promise=new Promise((data)=>
  {
    data(1);
    data(2);
    data(3);
  }).then(e=>console.log('promise'+e));

  observable=new Observable((data)=>
  {
    data.next(1);
    data.next(2);
    data.next(3);
  }).subscribe(e=>console.log('observable'+e));
*/

/*
asyncPipe=new Observable((observe)=>
{
  observe.next("Hii");
});
*/


asyncPipe=new Observable((observe=>{

  let i=0;
  setInterval(()=>{ observe.next("hello"+i); i++;},2000);
}));


booleanOb=new Observable((observ=>{
  setTimeout(()=>{
  observ.next("true");
},5000);

}));
   
  
}

