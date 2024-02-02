import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  customers : any=[
    {name:"Prithesh", mobile:12334},
    {name:"Dhanush", mobile:4453},
    {name:"hafiz", mobile:134}
  ]
  title = 'childToParent';
  counter:number=0;
  incrementCounter(){
    this.counter++;
  }
  obj: { name: string, phone: string } = { name: '', phone: '' };

  sendObject(){
    this.obj.name="Prithesh",
    this.obj.phone="7090943866"
  }
  ngOnInit(): void {
      console.log("Init called");
  }

  @ViewChild('btnref') btnDemonstrate:ElementRef={} as ElementRef;
  ngAfterViewInit(): void {
      setTimeout(()=>{
        this.btnDemonstrate.nativeElement.innerHTML='prithesh';
      },5000)
  }
  checkValue(){
    return true;
  }
}
