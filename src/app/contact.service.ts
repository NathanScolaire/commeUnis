import { Injectable } from '@angular/core';
import { ListeContacts } from './modele/contacts_bidon';
import { Contact } from './modele/contact';
import { RetroactionService } from './retroaction.service';
import { Observable, of } from 'rxjs'; // Rx =  reactive x .js pour programmer des fonctionnalités réactives (asynchrone)

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private retroactionService:RetroactionService) 
  { 

  }

  recupererContacts():Observable<Contact[]>
  {
    this.retroactionService.ajout('Récupération asynchrone des contacts');
    return of(ListeContacts);
  }

}
