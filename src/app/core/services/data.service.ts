import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, getDocs, deleteDoc, updateDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public firestore: Firestore, private notificationService: NotificationService, private router: Router) { }
  private data;

  addData(value: any, collectionName: string) {
    const dbInstance = collection(this.firestore, collectionName);
    addDoc(dbInstance, value)
      .then(() => {
        this.notificationService.openSnackBar("Done!");
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

  updateData(collectionName: string, newdata) {
    const dataToUpdate = doc(this.firestore, collectionName, newdata.id);
    updateDoc(dataToUpdate, newdata).then(() => {
      this.notificationService.openSnackBar("Updated!");
    }).catch((err) => {
      this.notificationService.openSnackBar(err.message);
    })
  }

  deleteData(collectionName: string, id: string) {
    const dataToDelete = doc(this.firestore, collectionName, id);
    deleteDoc(dataToDelete).then(() => {
      this.getData(collectionName);
      this.notificationService.openSnackBar("Done!");
    })
      .catch((err) => {
        this.notificationService.openSnackBar(err.message);
      });
  }

}