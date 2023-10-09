import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css', './galeria.responsive.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input()
  photoCover: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
