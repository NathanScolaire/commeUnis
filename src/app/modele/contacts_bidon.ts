// fichier: contacts_bidon.ts
// Auteur: Nazarit Makareean
// Date: 2020-09-22
// But: Liste HardCodé de contacts 

import { Contact } from './contact';

export const ListeContacts:Contact[] = new Array(
    new Contact(1, 'Aymeric', '450-848-5881'),
      new Contact(2, 'Beatrice', '450-848-5882'),
      new Contact(3, 'Claude', '450-848-5883'),
      new Contact(4, 'Daniela', '450-848-5884'),
      new Contact(5, 'Ernest', '450-848-5885') 
)
