import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css',
})
export class BigCard implements OnInit {

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDesc:string=""

  ngOnInit(): void {
  }
}
