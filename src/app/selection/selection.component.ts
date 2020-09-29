// fichier: selection.component.ts
// Auteur: Nazarit Makareean
// Date: 2020-09-22
// But: Permet la seléction du contact désiré

import { Component, OnInit } from '@angular/core';
import { Contact } from './../modele/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  //Liste des contacts HardCodé dans contacts_bidon.ts
  contacts:Contact[];
  contactSelectionne:Contact;
  selectionActive:boolean = true;

//------------------------------------
//
//------------------------------------
  constructor(private contactService:ContactService) { 
  }

//------------------------------------
// Initialisation de l'objet
//------------------------------------
  ngOnInit(): void {  
    this.contactService.recupererContactsWeb().subscribe(contacts => this.contacts = contacts);
  }

//------------------------------------
// 
//------------------------------------
  surSelect(valeur:number)
  {
    for(let con of this.contacts)
    {
      if(valeur == con.id)
      {
        this.contactSelectionne=con;
        break;
      }
    }
  }

//------------------------------------
// Fonction activé lors de la reception
// d'un évenement ChangementContext
//------------------------------------
  surChangementContext(neoContext:string)
  {
    if(neoContext == "MODIFIER" )
    {
      this.selectionActive = false;
    }
    
    if(neoContext == "ANNULER" )
    {
      this.selectionActive = true;
    }

    if(neoContext == "SUPPRIMER" )
    {
      this.selectionActive = false;
    }

    if(neoContext == "AJOUTER" )
    {
      this.selectionActive = false;
    }

    if(neoContext == "CONFIRMER" )
    {
      this.selectionActive = true;
    }
  }

//------------------------------------
// Méthode appelé lors d'un évenement SuppresionContact
//------------------------------------
  surSuppressionContact(idSupprimer:number)
  {

    this.contacts.forEach((con , i) => {

      if(con.id === idSupprimer)
      {
        this.contacts.splice(i, 1);
      }

    })

  }

//------------------------------------
// 
//------------------------------------
  surAjoutContact(neoContact:Contact){

    neoContact.id = this.prochainId();
    this.contacts.push(neoContact);
    this.selectionActive = true;


  }

//------------------------------------
// Méthode pour trouver un id 
// pour un nouveau contact
//------------------------------------
  prochainId() {
    if(this.contacts.length == 0)
    {
      return 1;
    }
    else{
      return(this.contacts[this.contacts.length - 1] .id + 1);
    }
  }
}
