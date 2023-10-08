import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() // essa pripriedade é imputavel, assim é possivel chamar na pagina home
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  Id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
