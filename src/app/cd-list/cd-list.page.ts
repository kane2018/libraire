import { Component, OnInit } from '@angular/core';
import {LibrairieServiceService} from '../librairie-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.page.html',
  styleUrls: ['./cd-list.page.scss'],
})
export class CdListPage implements OnInit {
  cds = [];
  constructor(private librairie: LibrairieServiceService, private router: Router) { }

  ngOnInit() {
    this.cds = this.librairie.cds;
  }

  voir(index) {
    this.router.navigate(['cd', index]);
  }

}
