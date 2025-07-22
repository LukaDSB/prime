import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  iconUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  features: Feature[] = [
    {
      iconUrl: 'https://i.imgur.com/w9SA72E.png',
      title: 'INTEGRAÇÃO CONTÁBIL',
      description: 'Conversamos com nossos contadores parceiros, entendemos suas necessidades e criamos recursos para a exportação digital de informações, diretamente para o sistema da contabilidade. Agilizamos a troca de informações e amenizamos a rotina do administrativo da loja.'
    },
    {
      iconUrl: 'https://i.imgur.com/Y8XJ1n7.png',
      title: 'APP MOBILE',
      description: 'Que tal transformar um smartphone em uma ferramenta multiuso? Nosso app faz conferência cega de mercadorias, consulta de estoque, preço, balanço por seção e outros recursos que serão implementados para agilizar o trabalho no "chão de loja".'
    },
    {
      iconUrl: 'https://i.imgur.com/pL4aG5T.png',
      title: 'APP DIRETOR',
      description: 'Na palma da mão o gestor tem acesso a indicadores de uma ou mais lojas. É possível analisar um período de vendas sabendo: quantidade, valor total e médio dos cupons; valor total por forma de pagamento (cartões, dinheiro, etc.) e por seção, além do volume de vendas "por hora" no decorrer do dia.'
    },
    {
      iconUrl: 'https://i.imgur.com/vHqj4Od.png',
      title: 'CONCILIAÇÃO BANCÁRIA',
      description: 'Gerencie suas contas bancárias dentro do sistema usando arquivos de integração com os bancos (extratos, borderôs, etc.). É fácil controlar seus pagamentos e recebimentos de forma segura, prática e ágil através deste recurso.'
    }
  ];

}