import { SchengenChecker } from './src/SchengenChecker';

async function test() {
  console.log('🧪 TypeScript Modül Test v2.1.0\n');

  const checker = new SchengenChecker({ 
    sehir: 'ankara',
    rateLimit: 2000 
  });

  // Test 1: İletişim Bilgileri
  console.log('📍 Test 1: İletişim Bilgileri');
  const franceContacts = checker.getContactInfo('fr');
  console.log(`Fransa için ${franceContacts.length} iletişim bilgisi:`);
  franceContacts.forEach(c => {
    console.log(`  ${c.city.toUpperCase()}: ${c.phone} - ${c.address}`);
  });
  console.log('');

  // Test 2: Ankara İletişim Bilgileri
  console.log('📍 Test 2: Ankara İletişim Bilgileri');
  const ankaraContact = checker.getContactInfo('de', 'ankara');
  if (ankaraContact.length > 0) {
    console.log('Almanya Ankara:');
    console.log(`  Adres: ${ankaraContact[0].address}`);
    console.log(`  Telefon: ${ankaraContact[0].phone}`);
    console.log(`  Email: ${ankaraContact[0].email}`);
    console.log(`  Çalışma Saatleri: ${ankaraContact[0].workingHours}`);
  }
  console.log('');

  // Test 3: Vize Gereksinimleri
  console.log('📍 Test 3: Vize Gereksinimleri');
  const franceReqs = checker.getVisaRequirements('fr', 'tourist');
  if (franceReqs) {
    console.log(`${franceReqs.country.toUpperCase()} - ${franceReqs.visaType}:`);
    console.log(`  İşlem Süresi: ${franceReqs.processingTime}`);
    console.log(`  Vize Ücreti: ${franceReqs.visaFee}`);
    console.log(`  Geçerlilik: ${franceReqs.validityPeriod}`);
    console.log(`  Gerekli Belgeler (${franceReqs.requiredDocuments.length}):`);
    franceReqs.requiredDocuments.slice(0, 5).forEach(doc => {
      console.log(`    - ${doc}`);
    });
  }
  console.log('');

  // Test 4: Dokümantasyon Checklist
  console.log('📍 Test 4: Dokümantasyon Checklist');
  const germanyChecklist = checker.getDocumentChecklist('de', 'tourist');
  if (germanyChecklist) {
    console.log(`${germanyChecklist.country.toUpperCase()} Zorunlu Belgeler:`);
    germanyChecklist.mandatory.slice(0, 4).forEach(doc => {
      console.log(`  ✓ ${doc.name}: ${doc.description}`);
    });
    console.log(`\nİpuçları:`);
    germanyChecklist.tips.slice(0, 3).forEach(tip => {
      console.log(`  💡 ${tip}`);
    });
  }
  console.log('');

  // Test 5: Kapsamlı Ülke Bilgisi
  console.log('📍 Test 5: Kapsamlı Ülke Bilgisi');
  const fullInfo = checker.getCountryFullInfo('fr');
  console.log('Fransa Tam Bilgi:');
  console.log(`  Config: ${fullInfo.config ? '✓' : '✗'}`);
  console.log(`  İletişim: ${fullInfo.contacts.length} merkez`);
  console.log(`  Gereksinimler: ${fullInfo.requirements ? '✓' : '✗'}`);
  console.log(`  Checklist: ${fullInfo.checklist ? '✓' : '✗'}`);
  console.log(`  Tam Bilgi: ${fullInfo.hasFullInfo ? '✓ Evet' : '✗ Hayır'}`);
  console.log('');

  // Test 6: Tüm Ülkeler
  console.log('📍 Test 6: Tüm Ülke Konfigürasyonları');
  const allCountries = checker.getAllCountries();
  console.log(`Toplam ${allCountries.length} ülke:`);
  allCountries.slice(0, 5).forEach(c => {
    console.log(`  ${c.flag} ${c.name} (${c.id}) - ${c.provider}`);
  });
  console.log('');

  // Test 7: Provider Filtreleme
  console.log('📍 Test 7: VFS Global Kullanan Ülkeler');
  const vfsCountries = checker.getCountriesByProvider('VFS Global');
  console.log(`${vfsCountries.length} ülke VFS Global kullanıyor`);
  console.log('');

  console.log('✅ Tüm testler tamamlandı!');
  console.log('\n📦 v2.1.0 Yeni Özellikler:');
  console.log('  ✓ İletişim bilgileri');
  console.log('  ✓ Vize gereksinimleri');
  console.log('  ✓ Dokümantasyon checklist');
  console.log('  ✓ Kapsamlı ülke bilgisi');
}

test().catch(console.error);
