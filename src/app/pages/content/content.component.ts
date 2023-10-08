import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"  // | é pra a variavel aceitar nulo

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))  // esse id tem que ser minusculo, 
                                    // porque ele vai converter pra minusculo,
                                    // mesmo sendo declarado maiusculo Id
    )
    this.setValuesToContent(this.id)
  }

  // pegando o dataFake e filtrando, 
  // procurando por um artigo onde o id desse artigo seja igual ao id que esta passando aqui
  setValuesToContent(id: string | null){
    //const result = dataFake.filter(articlo => articlo.id.toString() == id)  // toString se o id no dataFake não for string
    const result = dataFake.filter(article => article.id == id)[0]  // pegar a posição 0 do array

    //if(!result){
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
    //}
  }
}
