import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  getStars() {
    return new Array(this.book.rating);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  log() {
    console.log('CD');
  }

}
