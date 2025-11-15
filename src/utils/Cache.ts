import { CacheEntry, CacheOptions } from '../types';

/**
 * Simple in-memory cache implementation
 */
export class Cache {
  private cache: Map<string, CacheEntry<any>>;
  private options: CacheOptions;
  private hits: number = 0;
  private misses: number = 0;

  constructor(options?: Partial<CacheOptions>) {
    this.cache = new Map();
    this.options = {
      enabled: options?.enabled ?? true,
      ttl: options?.ttl ?? 5 * 60 * 1000, // 5 minutes default
      maxSize: options?.maxSize ?? 100
    };
  }

  /**
   * Get value from cache
   */
  get<T>(key: string): T | null {
    if (!this.options.enabled) {
      this.misses++;
      return null;
    }

    const entry = this.cache.get(key);
    
    if (!entry) {
      this.misses++;
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      this.misses++;
      return null;
    }

    this.hits++;
    return entry.data as T;
  }

  /**
   * Set value in cache
   */
  set<T>(key: string, data: T, ttl?: number): void {
    if (!this.options.enabled) {
      return;
    }

    // Check max size
    if (this.cache.size >= this.options.maxSize) {
      // Remove oldest entry
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    const cacheTtl = ttl ?? this.options.ttl;
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + cacheTtl
    };

    this.cache.set(key, entry);
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string): boolean {
    if (!this.options.enabled) {
      return false;
    }

    const entry = this.cache.get(key);
    if (!entry) {
      return false;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
  }

  /**
   * Clear expired entries
   */
  clearExpired(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hits: this.hits,
      misses: this.misses,
      hitRate: this.hits + this.misses > 0 
        ? (this.hits / (this.hits + this.misses) * 100).toFixed(2) + '%'
        : '0%',
      enabled: this.options.enabled,
      ttl: this.options.ttl
    };
  }

  /**
   * Enable/disable cache
   */
  setEnabled(enabled: boolean): void {
    this.options.enabled = enabled;
    if (!enabled) {
      this.clear();
    }
  }

  /**
   * Update TTL
   */
  setTTL(ttl: number): void {
    this.options.ttl = ttl;
  }
}
