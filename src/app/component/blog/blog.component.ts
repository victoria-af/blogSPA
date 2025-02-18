import { Component} from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newsArray: INews[] = [
    {
      title: 'Explorando la Magia de Kioto, Japón',
      imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Kioto, la antigua capital de Japón, es un destino imprescindible para los amantes de la cultura y la historia. Sus templos milenarios, como el Fushimi Inari Taisha, sus hermosos jardines y sus calles empedradas hacen de esta ciudad un lugar encantador para perderse. No olvides probar un auténtico matcha en una de sus tradicionales casas de té.',
      date: '10 de febrero de 2025',
    },

  {
    title: 'Aventura en la Patagonia Argentina',
    imageUrl: 'https://images.unsplash.com/photo-1585491665805-48272c97a0f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'La Patagonia argentina es un paraíso natural que ofrece impresionantes paisajes, desde glaciares hasta montañas nevadas y lagos de aguas cristalinas. Una caminata por el Parque Nacional Los Glaciares, hogar del famoso glaciar Perito Moreno, es una experiencia única que todo viajero debería vivir.',
    date: '12 de febrero de 2025',
  }
  ];

  newTitle: string= "";
  newImage: string= "";
  newText: string= "";
  newDate: string= "";


  addNews() {
    if (!this.newTitle || !this.newImage || !this.newText || !this.newDate) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    // Agregar la nueva noticia al array
    this.newsArray.unshift({
      title: this.newTitle,
      imageUrl: this.newImage,
      text: this.newText,
      date: this.newDate
    });
  
    // Limpiar los inputs después de agregar la noticia
    this.newTitle = "";
    this.newImage = "";
    this.newText = "";
    this.newDate = "";
  }

}
