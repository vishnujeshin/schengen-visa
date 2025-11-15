import { VisaRequirements } from '../types';

/**
 * Schengen Vize Gereksinimleri
 * Kaynak: Resmi konsolosluk web siteleri ve Schengen vize düzenlemeleri
 * Not: Bilgiler genel niteliklidir, güncel bilgi için resmi kaynaklara başvurun
 */
export const VISA_REQUIREMENTS: VisaRequirements[] = [
  {
    country: 'fr',
    visaType: 'tourist',
    requiredDocuments: [
      'Geçerli pasaport (en az 3 ay geçerlilik)',
      'Vize başvuru formu (imzalı)',
      'Biyometrik fotoğraf (2 adet)',
      'Seyahat sağlık sigortası (min. 30.000 EUR)',
      'Uçak rezervasyonu',
      'Otel rezervasyonu veya davet mektubu',
      'Mali durum belgesi (banka ekstresi)',
      'İş yerinden izin belgesi',
      'Medeni durum belgesi'
    ],
    processingTime: '15 iş günü',
    visaFee: '80 EUR (yetişkin), 40 EUR (6-12 yaş)',
    validityPeriod: '90 gün',
    stayDuration: '180 gün içinde 90 gün',
    additionalInfo: [
      'Randevu TLScontact üzerinden alınır',
      'Biyometrik veri toplama zorunludur',
      'Başvuru en erken 6 ay önceden yapılabilir'
    ]
  },
  {
    country: 'de',
    visaType: 'tourist',
    requiredDocuments: [
      'Geçerli pasaport (en az 3 ay geçerlilik)',
      'Vize başvuru formu (imzalı ve doldurulmuş)',
      'Biyometrik fotoğraf (2 adet, 35x45mm)',
      'Seyahat sağlık sigortası (min. 30.000 EUR)',
      'Gidiş-dönüş uçak bileti',
      'Konaklama belgesi',
      'Mali yeterlilik belgesi',
      'İşveren mektubu',
      'Son 3 ay banka ekstresi'
    ],
    processingTime: '15 iş günü',
    visaFee: '80 EUR (yetişkin), 40 EUR (6-12 yaş)',
    validityPeriod: '90 gün',
    stayDuration: '180 gün içinde 90 gün',
    additionalInfo: [
      'Randevu iDATA veya konsolosluk üzerinden',
      'Biyometrik veri 59 ay geçerlidir',
      'Acil durumlarda hızlandırılmış işlem mümkün'
    ]
  },
  {
    country: 'nl',
    visaType: 'tourist',
    requiredDocuments: [
      'Geçerli pasaport (en az 3 ay geçerlilik)',
      'Vize başvuru formu',
      'Biyometrik fotoğraf (2 adet)',
      'Seyahat sağlık sigortası (min. 30.000 EUR)',
      'Uçak rezervasyonu',
      'Otel rezervasyonu',
      'Banka ekstresi (son 3 ay)',
      'İş belgesi',
      'Nüfus cüzdanı fotokopisi'
    ],
    processingTime: '15 iş günü',
    visaFee: '80 EUR (yetişkin), 40 EUR (6-12 yaş)',
    validityPeriod: '90 gün',
    stayDuration: '180 gün içinde 90 gün',
    additionalInfo: [
      'VFS Global üzerinden başvuru',
      'Online başvuru formu doldurulmalı',
      'Randevu zorunludur'
    ]
  },
  {
    country: 'es',
    visaType: 'tourist',
    requiredDocuments: [
      'Geçerli pasaport (en az 3 ay geçerlilik)',
      'Vize başvuru formu (çevrimiçi doldurulmuş)',
      'Biyometrik fotoğraf (2 adet)',
      'Seyahat sağlık sigortası (min. 30.000 EUR)',
      'Uçak bileti rezervasyonu',
      'Konaklama belgesi',
      'Mali durum belgesi',
      'İşveren izin belgesi',
      'Seyahat programı'
    ],
    processingTime: '15-30 iş günü',
    visaFee: '80 EUR (yetişkin), 40 EUR (6-12 yaş)',
    validityPeriod: '90 gün',
    stayDuration: '180 gün içinde 90 gün',
    additionalInfo: [
      'BLS International üzerinden başvuru',
      'Tüm belgeler İspanyolca veya İngilizce olmalı',
      'Davet mektubu varsa noter onaylı olmalı'
    ]
  },
  {
    country: 'it',
    visaType: 'tourist',
    requiredDocuments: [
      'Geçerli pasaport (en az 3 ay geçerlilik)',
      'Vize başvuru formu',
      'Biyometrik fotoğraf (2 adet)',
      'Seyahat sağlık sigortası (min. 30.000 EUR)',
      'Uçak rezervasyonu',
      'Otel rezervasyonu veya davet mektubu',
      'Banka ekstresi',
      'İş belgesi',
      'Medeni hal belgesi'
    ],
    processingTime: '15 iş günü',
    visaFee: '80 EUR (yetişkin), 40 EUR (6-12 yaş)',
    validityPeriod: '90 gün',
    stayDuration: '180 gün içinde 90 gün',
    additionalInfo: [
      'Online randevu sistemi kullanılır',
      'Tüm belgeler İtalyanca veya İngilizce tercüme edilmeli',
      'Biyometrik veri toplama zorunlu'
    ]
  }
];

export const getVisaRequirements = (countryId: string, visaType: string = 'tourist'): VisaRequirements | undefined => {
  return VISA_REQUIREMENTS.find(
    v => v.country === countryId.toLowerCase() && v.visaType === visaType
  );
};

export const getAllVisaTypes = (countryId: string): VisaRequirements[] => {
  return VISA_REQUIREMENTS.filter(v => v.country === countryId.toLowerCase());
};
