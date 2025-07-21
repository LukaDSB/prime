import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements AfterViewInit {
  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  marcas = [
    '../../../assets/logoPetrobras.avif',
    '../../../assets/logoPrysmian.avif',
    '../../../assets/logoCasagrande.avif',
    '../../../assets/logoBelamassa.avif',
    '../../../assets/logoBusato.avif',
    '../../../assets/logoCentraldecompras.avif',
    '../../../assets/logoCosentino.avif',
    '../../../assets/logoFrigolima.avif',
    '../../../assets/logoImpacto.avif',
    '../../../assets/logoPolitintas.avif',
    '../../../assets/logoRedeshow.avif',

    '../../../assets/logoPetrobras.avif',
    '../../../assets/logoPrysmian.avif',
    '../../../assets/logoCasagrande.avif',
    '../../../assets/logoBelamassa.avif',
    '../../../assets/logoBusato.avif',
    '../../../assets/logoCentraldecompras.avif',
    '../../../assets/logoCosentino.avif',
    '../../../assets/logoFrigolima.avif',
    '../../../assets/logoImpacto.avif',
    '../../../assets/logoPolitintas.avif',
    '../../../assets/logoRedeshow.avif',

    '../../../assets/logoPetrobras.avif',
    '../../../assets/logoPrysmian.avif',
    '../../../assets/logoCasagrande.avif',
    '../../../assets/logoBelamassa.avif',
    '../../../assets/logoBusato.avif',
    '../../../assets/logoCentraldecompras.avif',
    '../../../assets/logoCosentino.avif',
    '../../../assets/logoFrigolima.avif',
    '../../../assets/logoImpacto.avif',
    '../../../assets/logoPolitintas.avif',
    '../../../assets/logoRedeshow.avif',
  ];

  ngAfterViewInit() {
    this.autoScroll();
  }

  autoScroll() {
    const track = this.trackRef.nativeElement;
    const scrollSpeed = 0.5;

    const step = () => {
      if (!this.isDragging) {
        track.scrollLeft += scrollSpeed;

        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.trackRef.nativeElement.classList.add('active');
    this.startX = this.getX(event) - this.trackRef.nativeElement.offsetLeft;
    this.scrollLeft = this.trackRef.nativeElement.scrollLeft;
  }

  stopDrag() {
    this.isDragging = false;
    this.trackRef.nativeElement.classList.remove('active');
  }

  dragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = this.getX(event) - this.trackRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.trackRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private getX(event: MouseEvent | TouchEvent): number {
    return (event instanceof MouseEvent) ? event.pageX : event.touches[0].pageX;
  }
}