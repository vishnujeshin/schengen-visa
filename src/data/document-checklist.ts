import { DocumentChecklist } from '../types';

/**
 * Vize Başvurusu İçin Dokümantasyon Kontrol Listesi
 * Kaynak: Schengen vize düzenlemeleri ve konsolosluk gereksinimleri
 */
export const DOCUMENT_CHECKLISTS: DocumentChecklist[] = [
  {
    country: 'fr',
    visaType: 'tourist',
    mandatory: [
      {
        name: 'Pasaport',
        description: 'En az 3 ay geçerli, 2 boş sayfa',
        format: 'Orijinal + fotokopi',
        quantity: 1
      },
      {
        name: 'Vize Başvuru Formu',
        description: 'Tam doldurulmuş ve imzalanmış',
        format: 'Online form çıktısı',
        quantity: 1
      },
      {
        name: 'Fotoğraf',
        description: 'Biyometrik standartlarda, beyaz fon',
        format: '35x45mm, renkli',
        quantity: 2
      },
      {
        name: 'Seyahat Sigortası',
        description: 'Minimum 30.000 EUR teminat',
        format: 'Orijinal poliçe',
        quantity: 1
      },
      {
        name: 'Uçak Bileti',
        description: 'Gidiş-dönüş rezervasyonu',
        format: 'Rezervasyon belgesi',
        quantity: 1
      },
      {
        name: 'Konaklama Belgesi',
        description: 'Otel rezervasyonu veya davet mektubu',
        format: 'Onaylı belge',
        quantity: 1
      },
      {
        name: 'Banka Ekstresi',
        description: 'Son 3 ay, günlük 50-60 EUR yeterlilik',
        format: 'Banka kaşeli',
        quantity: 1
      },
      {
        name: 'İşveren Mektubu',
        description: 'İzin belgesi, maaş bilgisi',
        format: 'Antetli kağıt',
        quantity: 1
      }
    ],
    optional: [
      {
        name: 'Evlilik Cüzdanı',
        description: 'Eşle seyahat ediliyorsa',
        format: 'Fotokopi'
      },
      {
        name: 'Önceki Vizeler',
        description: 'Eski pasaport sayfaları',
        format: 'Fotokopi'
      },
      {
        name: 'Emlak Belgesi',
        description: 'Tapu, araç ruhsatı',
        format: 'Fotokopi'
      }
    ],
    tips: [
      'Tüm belgeler İngilizce veya Fransızca olmalı',
      'Fotokopiler A4 boyutunda olmalı',
      'Belgeler kronolojik sırada düzenlensin',
      'Randevu saatinden 15 dakika önce gelin',
      'Orijinal belgeleri yanınızda bulundurun'
    ]
  },
  {
    country: 'de',
    visaType: 'tourist',
    mandatory: [
      {
        name: 'Pasaport',
        description: 'En az 3 ay geçerli, 2 boş sayfa',
        format: 'Orijinal + fotokopi',
        quantity: 1
      },
      {
        name: 'Vize Başvuru Formu',
        description: 'Videx sistemi ile doldurulmuş',
        format: 'Çıktı + barkod',
        quantity: 1
      },
      {
        name: 'Fotoğraf',
        description: 'Biyometrik, beyaz fon',
        format: '35x45mm',
        quantity: 2
      },
      {
        name: 'Seyahat Sigortası',
        description: 'Minimum 30.000 EUR, Schengen geçerli',
        format: 'Orijinal poliçe',
        quantity: 1
      },
      {
        name: 'Uçak Rezervasyonu',
        description: 'Gidiş-dönüş, ödenmemiş olabilir',
        format: 'Rezervasyon kodu',
        quantity: 1
      },
      {
        name: 'Konaklama Kanıtı',
        description: 'Otel veya ev sahibi davet mektubu',
        format: 'Onaylı belge',
        quantity: 1
      },
      {
        name: 'Mali Durum',
        description: 'Son 3 ay banka ekstresi',
        format: 'Banka kaşeli',
        quantity: 1
      },
      {
        name: 'İş Belgesi',
        description: 'Çalışma durumu ve izin',
        format: 'Antetli, imzalı',
        quantity: 1
      }
    ],
    optional: [
      {
        name: 'Vergi Levhası',
        description: 'Gelir durumu kanıtı',
        format: 'Fotokopi'
      },
      {
        name: 'Seyahat Programı',
        description: 'Detaylı plan',
        format: 'Yazılı belge'
      }
    ],
    tips: [
      'Videx formu online doldurulmalı',
      'Tüm belgeler Almanca veya İngilizce',
      'Biyometrik veri 59 ay geçerli',
      'Randevuya zamanında gelin',
      'Eksik belge varsa başvuru reddedilebilir'
    ]
  }
];

export const getDocumentChecklist = (countryId: string, visaType: string = 'tourist'): DocumentChecklist | undefined => {
  return DOCUMENT_CHECKLISTS.find(
    d => d.country === countryId.toLowerCase() && d.visaType === visaType
  );
};
