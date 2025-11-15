import { Statistics, CountryStat, RandevuKontrolSonuc } from '../types';
import { getCountryConfig } from '../constants';

/**
 * Statistics tracker for appointment checks
 */
export class StatisticsTracker {
  private stats: Statistics;
  private countryStats: Map<string, {
    checks: number;
    successes: number;
    totalResponseTime: number;
  }>;
  private responseTimes: number[];

  constructor() {
    this.stats = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      cacheHits: 0,
      cacheMisses: 0,
      averageResponseTime: 0,
      mostCheckedCountries: [],
      lastUpdated: new Date()
    };
    this.countryStats = new Map();
    this.responseTimes = [];
  }

  /**
   * Record a check result
   */
  recordCheck(result: RandevuKontrolSonuc, responseTime: number, fromCache: boolean = false): void {
    this.stats.totalChecks++;
    
    if (result.durum === 'musait' || result.durum === 'dolu' || result.durum === 'bilinmiyor') {
      this.stats.successfulChecks++;
    } else {
      this.stats.failedChecks++;
    }

    if (fromCache) {
      this.stats.cacheHits++;
    } else {
      this.stats.cacheMisses++;
    }

    // Record response time
    this.responseTimes.push(responseTime);
    if (this.responseTimes.length > 100) {
      this.responseTimes.shift(); // Keep last 100
    }
    this.stats.averageResponseTime = this.calculateAverageResponseTime();

    // Update country stats
    this.updateCountryStats(result.ulke, result.durum !== 'hata' && result.durum !== 'timeout', responseTime);
    
    this.stats.lastUpdated = new Date();
  }

  /**
   * Update country-specific statistics
   */
  private updateCountryStats(country: string, success: boolean, responseTime: number): void {
    const current = this.countryStats.get(country) || {
      checks: 0,
      successes: 0,
      totalResponseTime: 0
    };

    current.checks++;
    if (success) current.successes++;
    current.totalResponseTime += responseTime;

    this.countryStats.set(country, current);
  }

  /**
   * Calculate average response time
   */
  private calculateAverageResponseTime(): number {
    if (this.responseTimes.length === 0) return 0;
    const sum = this.responseTimes.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.responseTimes.length);
  }

  /**
   * Get most checked countries
   */
  private getMostCheckedCountries(): CountryStat[] {
    const stats: CountryStat[] = [];

    for (const [country, data] of this.countryStats.entries()) {
      const config = getCountryConfig(country);
      stats.push({
        country,
        countryName: config?.name || country,
        flag: config?.flag || '🏳️',
        checkCount: data.checks,
        successRate: data.checks > 0 ? (data.successes / data.checks * 100) : 0,
        averageResponseTime: data.checks > 0 ? Math.round(data.totalResponseTime / data.checks) : 0
      });
    }

    return stats.sort((a, b) => b.checkCount - a.checkCount).slice(0, 10);
  }

  /**
   * Get current statistics
   */
  getStatistics(): Statistics {
    return {
      ...this.stats,
      mostCheckedCountries: this.getMostCheckedCountries()
    };
  }

  /**
   * Get statistics for specific country
   */
  getCountryStatistics(country: string): CountryStat | null {
    const data = this.countryStats.get(country);
    if (!data) return null;

    const config = getCountryConfig(country);
    return {
      country,
      countryName: config?.name || country,
      flag: config?.flag || '🏳️',
      checkCount: data.checks,
      successRate: data.checks > 0 ? (data.successes / data.checks * 100) : 0,
      averageResponseTime: data.checks > 0 ? Math.round(data.totalResponseTime / data.checks) : 0
    };
  }

  /**
   * Reset all statistics
   */
  reset(): void {
    this.stats = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      cacheHits: 0,
      cacheMisses: 0,
      averageResponseTime: 0,
      mostCheckedCountries: [],
      lastUpdated: new Date()
    };
    this.countryStats.clear();
    this.responseTimes = [];
  }

  /**
   * Get success rate
   */
  getSuccessRate(): number {
    if (this.stats.totalChecks === 0) return 0;
    return (this.stats.successfulChecks / this.stats.totalChecks * 100);
  }

  /**
   * Get cache hit rate
   */
  getCacheHitRate(): number {
    const total = this.stats.cacheHits + this.stats.cacheMisses;
    if (total === 0) return 0;
    return (this.stats.cacheHits / total * 100);
  }
}
