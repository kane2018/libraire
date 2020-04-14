import { Component, OnInit } from '@angular/core';
import {CD} from '../models/CD';
import {ActivatedRoute} from '@angular/router';
import {LibrairieServiceService} from '../librairie-service.service';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.page.html',
  styleUrls: ['./lend-cd.page.scss'],
})
export class LendCdPage implements OnInit {

  id;
  cd: CD;
  constructor(private route: ActivatedRoute, private librairie: LibrairieServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cd = this.librairie.cds[this.id];
  }

  onToggle() {
    this.cd.statut = !this.cd.statut;
    this.librairie.preterRendre(this.cd);
  }

}
