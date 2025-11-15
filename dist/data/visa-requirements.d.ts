import { VisaRequirements } from '../types';
/**
 * Schengen Vize Gereksinimleri
 * Kaynak: Resmi konsolosluk web siteleri ve Schengen vize düzenlemeleri
 * Not: Bilgiler genel niteliklidir, güncel bilgi için resmi kaynaklara başvurun
 */
export declare const VISA_REQUIREMENTS: VisaRequirements[];
export declare const getVisaRequirements: (countryId: string, visaType?: string) => VisaRequirements | undefined;
export declare const getAllVisaTypes: (countryId: string) => VisaRequirements[];
