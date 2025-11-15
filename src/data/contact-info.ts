import { ContactInfo } from '../types';

/**
 * Konsolosluk ve Vize Merkezi İletişim Bilgileri
 * Kaynak: Resmi konsolosluk web siteleri
 */
export const CONTACT_INFO: ContactInfo[] = [
  {
    country: 'fr',
    city: 'ankara',
    address: 'Paris Caddesi No: 70, Kavaklıdere, Ankara',
    phone: '+90 312 455 45 45',
    email: 'info.ankara-amba@diplomatie.gouv.fr',
    website: 'https://tr.ambafrance.org',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00, 14:00-17:00',
    emergencyContact: '+90 312 455 45 00'
  },
  {
    country: 'fr',
    city: 'istanbul',
    address: 'İstiklal Caddesi No: 8, Taksim, İstanbul',
    phone: '+90 212 334 87 30',
    email: 'info.istanbul-fslt@diplomatie.gouv.fr',
    website: 'https://istanbul.consulfrance.org',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00, 14:00-17:00'
  },
  {
    country: 'de',
    city: 'ankara',
    address: 'Atatürk Bulvarı No: 114, Kavaklıdere, Ankara',
    phone: '+90 312 455 51 00',
    email: 'info@ankara.diplo.de',
    website: 'https://tuerkei.diplo.de',
    workingHours: 'Pazartesi-Cuma: 08:30-11:30',
    emergencyContact: '+90 312 455 51 00'
  },
  {
    country: 'de',
    city: 'istanbul',
    address: 'İnönü Caddesi No: 10, Gümüşsuyu, İstanbul',
    phone: '+90 212 334 61 00',
    email: 'info@istanbul.diplo.de',
    website: 'https://tuerkei.diplo.de',
    workingHours: 'Pazartesi-Cuma: 08:30-11:30'
  },
  {
    country: 'nl',
    city: 'ankara',
    address: 'Hollanda Caddesi No: 5, Yıldız, Ankara',
    phone: '+90 312 409 18 00',
    email: 'ank@minbuza.nl',
    website: 'https://www.netherlandsworldwide.nl/countries/turkey',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00'
  },
  {
    country: 'nl',
    city: 'istanbul',
    address: 'İstiklal Caddesi No: 393, Beyoğlu, İstanbul',
    phone: '+90 212 393 21 21',
    email: 'ist@minbuza.nl',
    website: 'https://www.netherlandsworldwide.nl/countries/turkey',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00'
  },
  {
    country: 'es',
    city: 'ankara',
    address: 'Abdullah Cevdet Sokak No: 8, Çankaya, Ankara',
    phone: '+90 312 440 21 69',
    email: 'emb.ankara@maec.es',
    website: 'http://www.exteriores.gob.es/Embajadas/ANKARA',
    workingHours: 'Pazartesi-Cuma: 09:00-13:00'
  },
  {
    country: 'it',
    city: 'ankara',
    address: 'Atatürk Bulvarı No: 118, Kavaklıdere, Ankara',
    phone: '+90 312 457 42 00',
    email: 'ambasciata.ankara@esteri.it',
    website: 'https://ambankara.esteri.it',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00'
  },
  {
    country: 'it',
    city: 'istanbul',
    address: 'Tomtom Kaptan Sokak No: 15, Beyoğlu, İstanbul',
    phone: '+90 212 243 10 24',
    email: 'consolato.istanbul@esteri.it',
    website: 'https://constistanbul.esteri.it',
    workingHours: 'Pazartesi-Cuma: 09:00-12:00'
  }
];

export const getContactInfo = (countryId: string, city?: string): ContactInfo[] => {
  const contacts = CONTACT_INFO.filter(c => c.country === countryId.toLowerCase());
  if (city) {
    return contacts.filter(c => c.city === city.toLowerCase());
  }
  return contacts;
};
