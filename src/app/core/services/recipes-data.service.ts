import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, query, where } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesDataService {

  constructor(public firestore: Firestore) { }

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

}