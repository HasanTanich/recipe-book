import { Component, HostListener, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import type { Recipe } from 'src/app/core/models/Recipe.model';

interface Image {
  path: string;
  title: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() items: Promise<Recipe[]>;
  @Input() infinite: boolean = false;
  @Input() topCategory: boolean = false;
  @Input() coverImage: boolean = false;
  @Input() height: string;
  private intervalSubscription: Subscription | undefined;

  images: Image[] = [];
  activeIndex = 0;
  screenWidth = innerWidth;
  maxIndex = 4;
  itemsPerSlide = 4;
  isLoading = true;
  activeIndexStyling = {
    '--active-index': this.activeIndex,
  };

  constructor() {}

  async ngOnInit() {
    try {
      await this.items.then((item) => {
        for (const recipe of item) {
          this.images.push({ path: recipe.image, title: recipe.name });
        }
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      this.isLoading = false;
    }

    if (this.infinite) {
      const intervalTime = 4000;

      this.intervalSubscription = interval(intervalTime).subscribe(() => {
        this.updateIndex(this.activeIndex + 1);
      });
      this.maxIndex = this.images.length - 1;
      return;
    }

    if (this.screenWidth <= 480) {
      this.itemsPerSlide = 1;
    } else if (this.screenWidth <= 768) {
      this.itemsPerSlide = 2;
    } else if (this.screenWidth <= 1200) {
      this.itemsPerSlide = 3;
    } else {
      this.itemsPerSlide = 4;
    }

    this.maxIndex = this.images.length - this.itemsPerSlide;
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.infinite) {
      return;
    }
    this.screenWidth = event.target.innerWidth;

    if (this.screenWidth <= 480) {
      this.itemsPerSlide = 1;
    } else if (this.screenWidth <= 768) {
      this.itemsPerSlide = 2;
    } else if (this.screenWidth <= 1200) {
      this.itemsPerSlide = 3;
    } else {
      this.itemsPerSlide = 4;
    }
    this.maxIndex = this.images.length - this.itemsPerSlide;

    if (this.activeIndex >= this.maxIndex) {
      this.activeIndex = this.maxIndex;
    }
  }

  updateIndex(newIndex: number) {
    if (this.infinite && newIndex > this.maxIndex) {
      newIndex = 0;
      this.activeIndex = newIndex;
      this.activeIndexStyling = {
        '--active-index': this.activeIndex,
      };
      return;
    }
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > this.maxIndex) {
      newIndex = this.maxIndex;
    }
    this.activeIndex = newIndex;
    this.activeIndexStyling = {
      '--active-index': this.activeIndex,
    };
  }
}
