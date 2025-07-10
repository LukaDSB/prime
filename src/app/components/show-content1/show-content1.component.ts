import { Component } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-show-content1',
  templateUrl: './show-content1.component.html',
  styleUrls: ['./show-content1.component.scss']
})

export class ShowContent1Component {
  slides: Slide[] = [
    {
      title: 'Slide 3: Arquitetura',
      subtitle: 'Construções que desafiam a gravidade.',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2025/07/neogrid_estudo-de-consumo-do-shopper_chocolate_mockup-2.png'
    },
    {
      title: 'Slide 1: Natureza',
      subtitle: 'Descubra paisagens incríveis.',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2025/04/Neogrid-Awards-Logo.png' // Imagem de um serviço de placeholder
    },
    {
      title: 'Slide 2: Tecnologia',
      subtitle: 'Explore o futuro da inovação.',
      imageUrl: 'https://neogrid.com/wp-content/uploads/2024/04/tablet-2.webp'
    }
  ];

  currentSlide: number = 0;

  // Variável para guardar a referência do intervalo do timer
  private slideInterval: any;

  // Hook que é executado quando o componente é inicializado
  ngOnInit(): void {
    this.startAutoSlide();
  }

  // Hook que é executado quando o componente é destruído
  // É crucial para limpar o intervalo e evitar vazamentos de memória
  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  /**
   * Inicia a transição automática dos slides a cada 5 segundos.
   */
  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda de slide a cada 5 segundos
  }

  /**
   * Avança para o próximo slide.
   */
  private nextSlide(): void {
    // A mágica do operador de módulo (%) faz o carrossel voltar ao início
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  /**
   * Seleciona um slide específico ao clicar em um dos indicadores (dots).
   * @param index O índice do slide a ser exibido.
   */
  selectSlide(index: number): void {
    this.currentSlide = index;
    // Reinicia o timer para que o usuário tenha tempo de ver o slide que escolheu
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }
}
