import { Component, OnInit } from '@angular/core';
import {LibrairieServiceService} from '../librairie-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  livres = [];

  constructor(private librairie: LibrairieServiceService) { }

  ngOnInit() {
    this.livres = this.librairie.livres;
  }

}
