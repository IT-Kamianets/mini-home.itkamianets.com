import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  labels: { [key: string]: { [key: string]: string } } = {
    title: { uk: 'Зв\'яжіться з нами', en: 'Contact Us', pl: 'Skontaktuj się з nami', de: 'Kontaktieren Sie uns' },
    subtitle: { 
      uk: 'Ми завжди раді допомогти вам з бронюванням або відповісти на ваші запитання.', 
      en: 'We are always happy to help you with booking or answer your questions.',
      pl: 'Zawsze chętnie pomożemy w rezerwacji lub odpowiemy na Twoje pytania.',
      de: 'Wir helfen Ihnen gerne bei der Buchung oder beantworten Ihre Fragen.'
    },
    address_label: { uk: 'Адреса', en: 'Address', pl: 'Adres', de: 'Adresse' },
    address_value: { 
      uk: 'вул. П\'ятницька, 10, Кам\'янець-Подільський', 
      en: '10 Pyatnytska St, Kamianets-Podilskyi',
      pl: 'ul. Piątnicka 10, Kamieniec Podolski',
      de: 'Pjatnyzka-Str. 10, Kamjanez-Podilskyj'
    },
    phone: { uk: 'Телефон', en: 'Phone', pl: 'Telefon', de: 'Telefon' },
    email: { uk: 'Електронна пошта', en: 'Email', pl: 'E-mail', de: 'E-Mail' },
    form_title: { uk: 'Напишіть нам', en: 'Send us a message', pl: 'Napisz do nas', de: 'Schreiben Sie uns' },
    form_name: { uk: 'Ваше ім\'я', en: 'Your Name', pl: 'Twoje imię', de: 'Ihr Name' },
    form_email: { uk: 'Ваш Email', en: 'Your Email', pl: 'Twój Email', de: 'Ihre E-Mail' },
    form_message: { uk: 'Повідомлення', en: 'Message', pl: 'Wiadomość', de: 'Nachricht' },
    form_submit: { uk: 'Відправити', en: 'Send Message', pl: 'Wyślij', de: 'Senden' },
    open_map: { uk: 'Відкрити на мапі', en: 'Open on map', pl: 'Otwórz na mapie', de: 'Auf der Karte öffnen' }
  };

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you! This is a demo form.');
  }

  scrollToMap() {
    const mapElement = document.getElementById('footer-map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
