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
    'https://neogrid.com/wp-content/uploads/2024/05/brf.png',
    'https://neogrid.com/wp-content/uploads/2024/05/wickbold.png',
    'https://neogrid.com/wp-content/uploads/2024/05/mateus.png',
    'https://neogrid.com/wp-content/uploads/2024/03/71650e09-d391-8735-fd3b-e3d25c812ded.png',
    'https://neogrid.com/wp-content/uploads/2024/05/seara.png',
    'https://neogrid.com/wp-content/uploads/2024/05/gpa.png',
    'https://neogrid.com/wp-content/uploads/2024/05/pepsico.png',
    'https://neogrid.com/wp-content/uploads/2024/05/coca-cola.png',
    'https://neogrid.com/wp-content/uploads/2024/05/johnson-e-johnson.png',
    // ...adicione mais imagens conforme necessário
  ];

  ngAfterViewInit() {
    this.autoScroll();
  }

  autoScroll() {
  const track = this.trackRef.nativeElement;
  let scrollSpeed = 0.3;

  const step = () => {
    if (!this.isDragging) {
      track.scrollLeft -= scrollSpeed;

      // Se chegou no início, volta para o final
      if (track.scrollLeft <= 0) {
        track.scrollLeft = track.scrollWidth - track.clientWidth;
      }
    }
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}


  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX = this.getX(event) - this.trackRef.nativeElement.offsetLeft;
    this.scrollLeft = this.trackRef.nativeElement.scrollLeft;
  }

  stopDrag() {
    this.isDragging = false;
  }

  dragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = this.getX(event) - this.trackRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.2;
    this.trackRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private getX(event: MouseEvent | TouchEvent): number {
    return (event instanceof MouseEvent) ? event.pageX : event.touches[0].pageX;
  }
}
