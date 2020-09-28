import { Injectable } from '@angular/core';
import { ListeContacts } from './modele/contacts_bidon';
import { Contact } from './modele/contact';
import { RetroactionService } from './retroaction.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    
    alert("Ajout d'un message");

    return ListeContacts;
  }

}
