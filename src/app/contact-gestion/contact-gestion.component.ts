// fichier: contact-gestion.component.ts
// Auteur: Nazarit Makareean
// Date: 2020-09-22
// But: Ajouter, recupérer, modifier et supprimer des contacts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from './../modele/contact';
import { RetroactionService } from '../retroaction.service';

@Component({
  selector: 'app-contact-gestion',
  templateUrl: './contact-gestion.component.html',
  styleUrls: ['./contact-gestion.component.css']
})
export class ContactGestionComponent implements OnInit {

  @Input() contact: Contact;
  @Output() changementContext: EventEmitter<string> = new EventEmitter<string>();
  @Output() suppressionContact: EventEmitter<number> = new EventEmitter<number>();
  @Output() ajoutContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private retroactionService:RetroactionService) { }

  ngOnInit(): void {
  }




  contexteAjoute: boolean = false;
  nomNeoContact: string;
  telNeoContact: string;
  nouveauContactPret: boolean = false;

  contexteModifier: boolean = false;
  modifieContactPret: boolean = false;
  nomContactMod: string;
  telContactMod: string;

  contexteSupprimer: boolean = false;

  //--------------------------------------------------
  // Lorsque l'utilisateur click sur le button ajouter
  //--------------------------------------------------
  modeAjouter() {
    this.retroactionService.ajout('En mode ajouter');

    this.changementContext.emit("AJOUTER");
    this.contexteAjoute = true;

    this.contact = null;
    this.nouveauContactPret = false;
    this.contexteModifier = false;
    this.contexteSupprimer = false;
  }

  //--------------------------------------------------
  // Lorsque l'utilisateur click sur le button modifier
  //--------------------------------------------------
  modeModifier() {
    this.retroactionService.ajout('En mode modifier');
    this.changementContext.emit("MODIFIER");
    this.contexteModifier = true;

    this.contexteAjoute = false;
    this.contexteSupprimer = false;
    this.modifieContactPret = false;
    this.nomContactMod = this.contact.nom;
    this.telContactMod = this.contact.tel;
  }

  //--------------------------------------------------
  // Lorsque l'utilisateur click sur le button supprimer
  //--------------------------------------------------
  modeSupprimer() {
    this.retroactionService.ajout('En mode supprimer');

    this.changementContext.emit("SUPPRIMER");
    this.contexteSupprimer = true;

    this.contexteModifier = false;
    this.contexteAjoute = false;
    this.modifieContactPret = false;
    this.nomContactMod = this.contact.nom;
    this.telContactMod = this.contact.tel;
  }

  //----------------------------------------------------------------------------------------------
  // Les 4 fonctions suivantes servent à recevoir et valider les valeurs fournis par l'utilisateur
  //-----------------------------------------------------------------------------------------------
  assigneNom(neoNom: string) {
    this.nomNeoContact = neoNom;
    if (this.telNeoContact.length > 0 &&
      this.nomNeoContact.length > 0) {
      this.nouveauContactPret = true;
    } else {
      this.retroactionService.ajout('Champ nom ou tel vide');
      this.nouveauContactPret = false;
    }
  }

  assigneTel(neoTel: string) {
    this.telNeoContact = neoTel;
    if (this.nomNeoContact.length > 0 &&
      this.telNeoContact.length > 0) {
      this.nouveauContactPret = true;
    } else {
      this.retroactionService.ajout('Champ nom ou tel vide');
      this.nouveauContactPret = false;
    }
  }

  modifieNom(modNom: string) {
    if (modNom === this.contact.nom && this.telContactMod === this.contact.tel) {
      return;
    }
    this.nomContactMod = modNom;
    if (this.telContactMod.length > 0 &&
      this.nomContactMod.length > 0) {
      this.modifieContactPret = true;
    } else {
      this.retroactionService.ajout('Champ nom ou tel vide');
      this.modifieContactPret = false;
    }
  }

  modifieTel(modTel: string) {
    if (this.nomContactMod === this.contact.nom && modTel === this.contact.tel) {
      return;
    }
    this.telContactMod = modTel;
    if (this.nomContactMod.length > 0 &&
      this.telContactMod.length > 0) {
      this.modifieContactPret = true;
    } else {
      this.retroactionService.ajout('Champ nom ou tel vide');
      this.modifieContactPret = false;
    }
  }
  //---------------------------------------------------------------

  //----------------------------------------------------------------------------------------------
  // 
  //-----------------------------------------------------------------------------------------------
  annuler() {
    this.changementContext.emit("ANNULER");

    this.contexteAjoute = false;
    this.nouveauContactPret = false;
    this.contexteModifier = false;
    this.contexteSupprimer = false;
  }

  //----------------------------------------------------------------------------------------------
  // l'utilisateur veut procèder à l'ajout des informations qu'il a fourni
  //-----------------------------------------------------------------------------------------------
  confirmerAjout() {
    let neoContact: Contact = new Contact(0, this.nomNeoContact, this.telNeoContact);
 
    this.retroactionService.ajout('Nouveau contact dans la liste: ' + neoContact.nom);

    this.contact = neoContact;
    this.ajoutContact.emit(this.contact);
    this.contexteAjoute = false;
    this.nouveauContactPret = false;
  }


  
  //----------------------------------------------------------------------------------------------
  // 
  //-----------------------------------------------------------------------------------------------
  confirmerModif() {

    this.retroactionService.ajout('Modification de: ' + this.contact.nom);

    this.contact.tel = this.telContactMod;
    this.contact.nom = this.nomContactMod;
    this.contexteModifier = false;
    this.changementContext.emit("CONFIRMER");
  }


  //----------------------------------------------------------------------------------------------
  // 
  //-----------------------------------------------------------------------------------------------
  confirmerSupprimer() {

    this.retroactionService.ajout('Suppression de: ' + this.contact.nom);

    this.contexteSupprimer = false;
    this.annuler();
    this.suppressionContact.emit(this.contact.id);
    this.contact = null;
  }

 
}
