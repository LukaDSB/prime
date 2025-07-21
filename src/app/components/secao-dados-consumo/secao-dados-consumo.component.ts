import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexagonoComponent } from '../hexagono/hexagono.component';
import { AppComponent } from 'src/app/app.component';

interface StatCard {
  value: string;
  label: string;
  gridArea: string;
}

@Component({
  selector: 'app-secao-dados-consumo',
  templateUrl: './secao-dados-consumo.component.html',
  styleUrls: ['./secao-dados-consumo.component.scss']
})
export class SecaoDadosConsumoComponent {

  stats: StatCard[] = [
    { value: '+6mil', label: 'distribuidores', gridArea: 'distribuidores' },
    { value: '+3,2mil', label: 'varejos online', gridArea: 'varejos' },
    { value: '+500mil', label: 'PDVs', gridArea: 'pdvs' },
    { value: '+5mil', label: 'indústrias', gridArea: 'industrias' },
    { value: '+1bilhão', label: 'de NFs', gridArea: 'nfs' }
  ];

  imagePath = '../../assets/fotoFace.jpg'; 

}