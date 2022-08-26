import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, getDocs } from '@angular/fire/firestore';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public firestore: Firestore, private notificationService: NotificationService) { }
  private data;

  addData(value: any, collectionName: string) {
    const dbInstance = collection(this.firestore, collectionName);
    addDoc(dbInstance, value)
      .then(() => {
        this.notificationService.openSnackBar("Done");
      })
      .catch((err) => {
        this.notificationService.openSnackBar(err.message);
      });
  }

  async getData(collectionName: string) {
    const dbInstance = collection(this.firestore, collectionName);
    await getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })];
      }).catch((err) => {
        this.notificationService.openSnackBar(err.message);
      });
    return this.data;
  }
}