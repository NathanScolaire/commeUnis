import { Injectable } from '@angular/core';
import { ListeContacts } from './modele/contacts_bidon';
import { Contact } from './modele/contact';
import { RetroactionService } from './retroaction.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private retroactionService:RetroactionService) 
  { 

  }

  recupererContacts():Contact[]
  {
    this.retroactionService.ajout('Récupération des contacts');

    return ListeContacts;
  }

}
