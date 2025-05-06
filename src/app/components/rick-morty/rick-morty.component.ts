import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService, Character } from '../../services/rick-morty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RickMortyComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
  error: string | null = null;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.error = null;
    
    this.rickMortyService.getCharacters(this.currentPage).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.totalPages = response.info.pages;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des personnages';
        this.loading = false;
      }
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
} 