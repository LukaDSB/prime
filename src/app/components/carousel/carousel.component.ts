import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      title: 'Neogrid',
      subtitle: 'Soluções para gestão',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2025/07/neogrid_estudo-de-consumo-do-shopper_chocolate_mockup-2.png'
    },
    {
      title: 'Slide 1: Natureza',
      subtitle: 'Descubra paisagens incríveis.',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2024/04/tablet-2.webp'
    },
    {
      title: 'Slide 2: Tecnologia',
      subtitle: 'Explore o futuro da inovação.',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2025/04/Neogrid-Awards-Logo.png'
    }
  ];

  currentSlide: number = 0;

  private slideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  private nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }
}
