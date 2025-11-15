import { CacheOptions } from '../types';
/**
 * Simple in-memory cache implementation
 */
export declare class Cache {
    private cache;
    private options;
    private hits;
    private misses;
    constructor(options?: Partial<CacheOptions>);
    /**
     * Get value from cache
     */
    get<T>(key: string): T | null;
    /**
     * Set value in cache
     */
    set<T>(key: string, data: T, ttl?: number): void;
    /**
     * Check if key exists and is valid
     */
    has(key: string): boolean;
    /**
     * Clear all cache
     */
    clear(): void;
    /**
     * Clear expired entries
     */
    clearExpired(): void;
    /**
     * Get cache statistics
     */
    getStats(): {
        size: number;
        maxSize: number;
        hits: number;
        misses: number;
        hitRate: string;
        enabled: boolean;
        ttl: number;
    };
    /**
     * Enable/disable cache
     */
    setEnabled(enabled: boolean): void;
    /**
     * Update TTL
     */
    setTTL(ttl: number): void;
}
