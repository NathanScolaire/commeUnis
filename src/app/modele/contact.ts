// fichier: contacts.ts
// Auteur: Nazarit Makareean
// Date: 2020-09-22
// But: Structure d'un Contact

export class Contact
{
  id:number;
  nom:string;
  tel:string;

  constructor(i:number, n:string, t:string)
  {
    this.id=i;
    this.nom=n;
    this.tel=t;
  }
}