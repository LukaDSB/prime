import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, CommonModule]
})

export class NavbarComponent {
  logoUrl = 'assets/logo-neogrid.png';

  dropdowns = [
    {
      title: 'Nossas Soluções',
      items: [
        { text: 'Conciliador de cartões', link: 'https://www.primess.com.br/conciliação-de-cartões' },
        { text: 'Consultoria Empresarial', link: 'https://www.primess.com.br/consultoria-empresarial' },
        { text: 'Automação e Sistema de Gestão', link: 'https://www.primess.com.br/sistemadegestão' },
        { text: 'App Força de Vendas', link: 'https://www.primess.com.br/cópia-e-commerce-b2c-e-marketplace' },
        { text: 'E-Commerce B2B', link: 'https://www.primess.com.br/e-commerce' },
        { text: 'Marketplace', link: 'https://www.primess.com.br/e-commerce' },
        { text: 'Auditoria Fiscal de Produtos', link: 'https://www.primess.com.br/copia-consultoria-para-supermercado' }
      ]
    },
    {
      title: 'Sobre',
      items: [
        { text: 'Consultoria', link: 'https://www.primess.com.br/sobre/consultoria' },
        { text: 'Suporte', link: 'https://www.primess.com.br/suporte' },
        { text: 'Treinamento', link: 'https://www.primess.com.br/treinamento' }
      ]
    },
  ];
}
