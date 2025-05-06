import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NasaService, NasaImage } from '../../services/nasa.service';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SafePipe]
})
export class NasaComponent implements OnInit {
  imageOfTheDay: NasaImage | null = null;
  selectedDate: string = '';
  loading: boolean = false;
  error: string | null = null;
  today: string = new Date().toISOString().split('T')[0];

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.loadImageOfTheDay();
  }

  loadImageOfTheDay() {
    this.loading = true;
    this.error = null;
    this.nasaService.getImageOfTheDay().subscribe({
      next: (data) => {
        this.imageOfTheDay = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement de l\'image';
        this.loading = false;
      }
    });
  }

  loadImageByDate() {
    if (!this.selectedDate) return;

    this.loading = true;
    this.error = null;
    this.nasaService.getImageByDate(this.selectedDate).subscribe({
      next: (data) => {
        this.imageOfTheDay = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement de l\'image';
        this.loading = false;
      }
    });
  }
} 