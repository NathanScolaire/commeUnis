import { Injectable } from '@angular/core';
import { ListeContacts } from './modele/contacts_bidon';
import { Contact } from './modele/contact';
import { RetroactionService } from './retroaction.service';
import { Observable, of } from 'rxjs'; // Rx =  reactive x .js pour programmer des fonctionnalités réactives (asynchrone)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient, private retroactionService:RetroactionService) 
  { 

  }

  recupererContacts():Observable<Contact[]>
  {
    this.retroactionService.ajout('Récupération asynchrone des contacts');
    return of(ListeContacts);
  }

  recupererContactsWeb():Observable<Contact[]>
  {
    this.retroactionService.ajout('Récupération asynchrone des contacts');
    //let url = "http://420.cstj.qc.ca/alainmartel/com/getContacts.php";
    let url = "http://localhost/com/getContacts.php";
    return this.http.get<Contact[]>(url); 
  }

}
