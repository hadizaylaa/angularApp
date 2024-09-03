import { Component ,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input() Img:string='';
  @Input() Title:string='';
  @Input() Description:string='';
  @Input() order:string='';


  constructor(){
    
  }

  ngOnInit(): void {
    
  }
}
