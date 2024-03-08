import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  toDate=new Date();
  msg="HelloJ32";

  num:number=9422.66998;
  n:number=9.56754;
  per:number=0.34;

  cur:number=175;
}
