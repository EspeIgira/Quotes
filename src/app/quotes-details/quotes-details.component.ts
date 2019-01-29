import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVote() {
    this.quote.upVote ++
  }

  downVote() {
    this.quote.downVote ++
  }

  constructor() { }

  ngOnInit() {
  }

}
