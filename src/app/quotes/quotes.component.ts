import { Component, OnInit} from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes(1,'The ballot is stronger than the bullet.','Abraham Lincoln','EspeIgira',0,0,new Date(1950,3,14)),
    new Quotes(2,'The margin is narrow, but the responsibility is clear.','John F. Kennedy','EspeIgira',0,0,new Date(2002,2,10)),
    new Quotes(3, 'A work of art is above all an adventure of the mind.','Eugene Ionesco','EspeIgira',0,0,new Date(2016,12,4)),
    new Quotes(4, 'Who is wise in love,love most, say least.','Alfred Lord Tennyson','EspeIgira',0,0,new Date(2018,1,20)),
    new Quotes(5, 'Dont think, just do.','Horace','EspeIgira',0,0,new Date(2019,5,6)),
    new Quotes(6, 'And thats the way it is.','Walter Cronkite','EspeIgira',0,0,new Date(2019,1,2)),
  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuotes(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}
addNewQuotes(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
    ngOnInit() {
    }

}
