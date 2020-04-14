import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Livre} from '../models/Livre';
import {LibrairieServiceService} from '../librairie-service.service';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.page.html',
  styleUrls: ['./lend-book.page.scss'],
})
export class LendBookPage implements OnInit {
  id;
  livre: Livre;
  constructor(private route: ActivatedRoute, private librairie: LibrairieServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.livre = this.librairie.livres[this.id];
  }
  onToggle() {
    this.livre.statut = !this.livre.statut;
    this.librairie.preterRendre(this.livre);
  }
}
