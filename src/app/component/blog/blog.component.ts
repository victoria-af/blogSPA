import { Component, EventEmitter } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newsArray: INews[] = [
    {
      title: 'Explorando la Magia de Kioto, Japón',
      imageUrl: 'https://source.unsplash.com/600x400/?kyoto,temple',
      text: 'Kioto, la antigua capital de Japón, es un destino imprescindible para los amantes de la cultura y la historia. Sus templos milenarios, como el Fushimi Inari Taisha, sus hermosos jardines y sus calles empedradas hacen de esta ciudad un lugar encantador para perderse. No olvides probar un auténtico matcha en una de sus tradicionales casas de té.',
      date: '10 de febrero de 2025',
    },

  {
    title: 'Aventura en la Patagonia Argentina',
    imageUrl: 'https://source.unsplash.com/600x400/?patagonia,mountains',
    text: 'La Patagonia argentina es un paraíso natural que ofrece impresionantes paisajes, desde glaciares hasta montañas nevadas y lagos de aguas cristalinas. Una caminata por el Parque Nacional Los Glaciares, hogar del famoso glaciar Perito Moreno, es una experiencia única que todo viajero debería vivir.',
    date: '12 de febrero de 2025',
  }
  ]
}

  newTitle: "";
  newImage: "";
  newText: "";
  newDate: "";

  