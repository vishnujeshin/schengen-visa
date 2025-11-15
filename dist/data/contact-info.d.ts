import { ContactInfo } from '../types';
/**
 * Konsolosluk ve Vize Merkezi İletişim Bilgileri
 * Kaynak: Resmi konsolosluk web siteleri
 */
export declare const CONTACT_INFO: ContactInfo[];
export declare const getContactInfo: (countryId: string, city?: string) => ContactInfo[];
