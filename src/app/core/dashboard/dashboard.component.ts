import { Component, OnInit } from '@angular/core';

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
    image: 'assets/images/food.jpg', // Support base64 image
    thumbImage: 'assets/images/food.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
    , {
    image: 'assets/images/raw-giant-shrimps.jpg', // Support base64 image
    thumbImage: 'assets/images/raw-giant-shrimps.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 3 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
    , {
    image: 'assets/images/raw-giant-shrimps.jpg', // Support base64 image
    thumbImage: 'assets/images/raw-giant-shrimps.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 4 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
    , {
    image: 'assets/images/food.jpg', // Support base64 image
    thumbImage: 'assets/images/food.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 5 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
