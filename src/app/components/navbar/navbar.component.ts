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
    { title: 'Soluções', items: ['ERP', 'CRM', 'WMS'] },
    { title: 'Sobre', items: ['Consultoria', 'Suporte', 'Treinamento'] },
    { title: 'Aprenda', items: ['Varejo', 'Indústria', 'Logística'] },
    { title: 'Contato', items: ['História', 'Equipe', 'Carreiras'] }
  ];
}
