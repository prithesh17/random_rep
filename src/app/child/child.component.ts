import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges{
  @Input() fromParent:number=0;
  @Input() objFromParent:any={};
  ngOnInit(): void {
      console.log("init called from child");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
      console.log("The value is : ",changes['fromParent'].currentValue)
  }
}
