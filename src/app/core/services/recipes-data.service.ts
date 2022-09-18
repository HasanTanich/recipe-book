import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, query, where, updateDoc, arrayUnion, arrayRemove } from '@angular/fire/firestore';
import { Review } from '../models/review.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})

export class RecipesDataService {

  constructor(public firestore: Firestore, public notificationService: NotificationService) { }

  async getRecipesFromCuisine(cuisineName: string) {
    const data = [];
    const q = query(collection(this.firestore, "recipes"), where("cuisine", "==", cuisineName));
    const querySnapshot = await getDocs(q);

    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
    });

    return data;
  }

  async getRecipesFromName(recipeName: string) {
    let data;
    const q = query(collection(this.firestore, "recipes"), where("name", "==", recipeName));
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data = doc.data();
    });
    return data;
  }

  async addReviewToRecipe(review: Review, id: string) {
    const q = doc(this.firestore, "recipes", id);
    await updateDoc(q, {
      reviews: arrayUnion(review)
    });
  }
}