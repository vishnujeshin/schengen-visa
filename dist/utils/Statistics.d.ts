import { Statistics, CountryStat, RandevuKontrolSonuc } from '../types';
/**
 * Statistics tracker for appointment checks
 */
export declare class StatisticsTracker {
    private stats;
    private countryStats;
    private responseTimes;
    constructor();
    /**
     * Record a check result
     */
    recordCheck(result: RandevuKontrolSonuc, responseTime: number, fromCache?: boolean): void;
    /**
     * Update country-specific statistics
     */
    private updateCountryStats;
    /**
     * Calculate average response time
     */
    private calculateAverageResponseTime;
    /**
     * Get most checked countries
     */
    private getMostCheckedCountries;
    /**
     * Get current statistics
     */
    getStatistics(): Statistics;
    /**
     * Get statistics for specific country
     */
    getCountryStatistics(country: string): CountryStat | null;
    /**
     * Reset all statistics
     */
    reset(): void;
    /**
     * Get success rate
     */
    getSuccessRate(): number;
    /**
     * Get cache hit rate
     */
    getCacheHitRate(): number;
}
