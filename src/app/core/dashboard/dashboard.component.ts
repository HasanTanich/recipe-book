import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/images/raw-giant-shrimps.jpg',
    thumbImage: 'assets/images/raw-giant-shrimps.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }
    , {
    image: 'assets/images/food.jpg', // Support base64 image
    thumbImage: 'assets/images/food.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
    , {
    image: 'assets/images/food.jpg',
    thumbImage: 'assets/images/food.jpg',
    title: 'Image title',
    alt: 'Image alt',
    order: 2
  }
    , {
    image: 'assets/images/raw-giant-shrimps.jpg',
    thumbImage: 'assets/images/raw-giant-shrimps.jpg',
    title: 'Image title',
    alt: 'Image alt',
    order: 3
  }
    , {
    image: 'assets/images/raw-giant-shrimps.jpg',
    thumbImage: 'assets/images/raw-giant-shrimps.jpg',
    title: 'Image title',
    alt: 'Image alt',
    order: 4
  }
    , {
    image: 'assets/images/food.jpg',
    thumbImage: 'assets/images/food.jpg',
    title: 'Image title',
    alt: 'Image alt',
    order: 5
  }
  ];

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
