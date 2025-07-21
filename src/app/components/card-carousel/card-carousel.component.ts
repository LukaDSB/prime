import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  activeIndex = 0;
  isDragging = false;
  startX = 0;
  scrollLeftStart = 0;

  cards = [
    {
      titulo: 'Neogrid',
      descricao:
        'Adcos otimiza sua atuação no canal Farma com uso do aplicativo Trade Force.Adcos otimiza sua atuação no canal Farma com uso do aplicativo Trade Force.al Farma com uso do aplicativo Trade Force.al Farma com uso do aplicativo Trade Force.',
      imagem: '../',
      link: 'https://exemplo.com/historia/caimed',
    },
    {
      titulo: 'Mercos',
      descricao: 'Melhoria no controle de estoque com soluções digitais.soluções digitais.soluções digitais.',
      imagem: 'https://via.placeholder.com/60',
      link: 'https://exemplo.com/historia/drogariax',
    },
    {
      titulo: 'Conciliador Valida',
      descricao: 'Redução de perdas com gestão automatizada.',
      imagem: 'https://via.placeholder.com/60',
      link: 'https://exemplo.com/historia/saude',
    },{
      titulo: 'Consultorias',
      descricao:
        'Adcos otimiza sua atuação no canal Farma com uso do aplicativo Trade Force.',
      imagem: 'https://neogrid.com/wp-content/uploads/2024/03/Adcos-60x60.webp',
      link: 'https://exemplo.com/historia/caimed',
    }
  ];

  ngAfterViewInit(): void {
    const carouselEl = this.carousel.nativeElement;

    carouselEl.addEventListener('scroll', this.onScroll.bind(this));
    carouselEl.addEventListener('mousedown', this.onMouseDown.bind(this));
    carouselEl.addEventListener('mousemove', this.onMouseMove.bind(this));
    carouselEl.addEventListener('mouseup', this.onMouseUp.bind(this));
    carouselEl.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  onScroll(): void {
    const scrollLeft = this.carousel.nativeElement.scrollLeft;
    const cardWidth = 300 + 16;
    this.activeIndex = Math.round(scrollLeft / cardWidth);
  }

  scrollToCard(index: number): void {
    const cardWidth = 300 + 16;
    this.carousel.nativeElement.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    this.activeIndex = index;
  }

  onMouseDown(e: MouseEvent): void {
    this.isDragging = true;
    this.startX = e.pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeftStart = this.carousel.nativeElement.scrollLeft;
  }

  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    e.preventDefault();

    const x = e.pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.2;
    this.carousel.nativeElement.scrollLeft = this.scrollLeftStart - walk;
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseLeave(): void {
    this.isDragging = false;
  }
}
