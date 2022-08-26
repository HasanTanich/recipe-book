import { Component, OnInit } from '@angular/core';
import { Image } from '../models/imageslider.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  imagesGallery: Image[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData('recipes').then((data) => {
      data.map(d => {
        let temp = {
          image: d.image,
          thumbImage: d.image,
          title: d.name,
          alt: d.name
        }
        this.imagesGallery.push(temp);
      });
    });
  }

}