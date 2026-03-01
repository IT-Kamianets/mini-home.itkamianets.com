import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  labels: { [key: string]: { [key: string]: string } } = {
    address: { 
      uk: 'вул. П\'ятницька, 10, Кам\'янець-Подільський', 
      en: '10 Pyatnytska St, Kamianets-Podilskyi',
      pl: 'ul. Piątnicka 10, Kamieniec Podolski',
      de: 'Pjatnyzka-Str. 10, Kamjanez-Podilskyj'
    },
    rights: { 
      uk: 'Всі права захищено.', 
      en: 'All rights reserved.',
      pl: 'Wszelkie prawa zastrzeżone.',
      de: 'Alle Rechte vorbehalten.'
    }
  };
}
