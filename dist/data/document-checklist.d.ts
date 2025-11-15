import { DocumentChecklist } from '../types';
/**
 * Vize Başvurusu İçin Dokümantasyon Kontrol Listesi
 * Kaynak: Schengen vize düzenlemeleri ve konsolosluk gereksinimleri
 */
export declare const DOCUMENT_CHECKLISTS: DocumentChecklist[];
export declare const getDocumentChecklist: (countryId: string, visaType?: string) => DocumentChecklist | undefined;
