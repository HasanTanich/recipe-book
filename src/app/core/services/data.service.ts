import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public firestore: Firestore) { }

  addData(value: any) {
    const dbInstance = collection(this.firestore, 'contact-us');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent');
      })
      .catch((err) => {
        alert(err.message);
      });
  }


}
