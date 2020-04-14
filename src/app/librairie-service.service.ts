import { Injectable } from '@angular/core';
import {Livre} from './models/Livre';
import {CD} from './models/CD';

@Injectable({
  providedIn: 'root'
})
export class LibrairieServiceService {
  livres: Livre[] = [
    {
      name: 'Une Si Longue Lettre',
      statut: false
    },
    {
      name: 'L\'orage',
      statut: true
    },
    {
      name: 'Une vie de boy',
      statut: false
    }
  ];
  cds: CD[] = [
    {
      name: '50 Cent',
      statut: false
    },
    {
      name: 'Mickeal Jackson',
      statut: false
    },
    {
      name: 'Youssou NDOUR',
      statut: true
    }
  ];
  constructor() { }

  preterRendre(objet) {
    if (objet instanceof Livre) {
      objet.statut = !objet.statut;
    } else if (objet instanceof CD) {
      objet.statut = !objet.statut;
    }
  }

}
