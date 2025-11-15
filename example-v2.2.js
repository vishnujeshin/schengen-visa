/**
 * Example: v2.2.0 - Cache & Statistics
 * 
 * Demonstrates:
 * - In-memory caching for performance
 * - Statistics tracking
 * - Cache hit/miss rates
 * - Response time tracking
 */

const { SchengenChecker } = require('./dist/index');

async function main() {
  console.log('🚀 Schengen Checker v2.2.0 - Cache & Statistics Demo\n');

  // Initialize with cache enabled
  const checker = new SchengenChecker({
    sehir: 'ankara',
    cache: {
      enabled: true,
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 50
    },
    enableStatistics: true
  });

  // ============================================
  // 1. First Check (Cache Miss)
  // ============================================
  console.log('📊 1. First Check (will be cached)\n');
  
  console.time('First check');
  const result1 = await checker.musaitRandevuKontrol('fransa');
  console.timeEnd('First check');
  
  console.log(`Result: ${result1.durum} - ${result1.mesaj}`);
  console.log('');

  // ============================================
  // 2. Second Check (Cache Hit)
  // ============================================
  console.log('⚡ 2. Second Check (from cache - should be faster)\n');
  
  console.time('Second check');
  const result2 = await checker.musaitRandevuKontrol('fransa');
  console.timeEnd('Second check');
  
  console.log(`Result: ${result2.durum} - ${result2.mesaj}`);
  console.log('');

  // ============================================
  // 3. Cache Statistics
  // ============================================
  console.log('📈 3. Cache Statistics\n');
  
  const cacheStats = checker.getCacheStats();
  console.log(`  Cache Size: ${cacheStats.size}/${cacheStats.maxSize}`);
  console.log(`  Cache Hits: ${cacheStats.hits}`);
  console.log(`  Cache Misses: ${cacheStats.misses}`);
  console.log(`  Hit Rate: ${cacheStats.hitRate}`);
  console.log(`  TTL: ${cacheStats.ttl}ms`);
  console.log(`  Enabled: ${cacheStats.enabled}`);
  console.log('');

  // ============================================
  // 4. Multiple Checks for Statistics
  // ============================================
  console.log('🔄 4. Running Multiple Checks...\n');
  
  const countries = ['fransa', 'almanya', 'hollanda'];
  for (const country of countries) {
    await checker.musaitRandevuKontrol(country);
    console.log(`  ✓ Checked ${country}`);
  }
  console.log('');

  // ============================================
  // 5. Overall Statistics
  // ============================================
  console.log('📊 5. Overall Statistics\n');
  
  const stats = checker.getStatistics();
  console.log(`  Total Checks: ${stats.totalChecks}`);
  console.log(`  Successful: ${stats.successfulChecks}`);
  console.log(`  Failed: ${stats.failedChecks}`);
  console.log(`  Success Rate: ${checker.getSuccessRate().toFixed(2)}%`);
  console.log(`  Cache Hits: ${stats.cacheHits}`);
  console.log(`  Cache Misses: ${stats.cacheMisses}`);
  console.log(`  Cache Hit Rate: ${checker.getCacheHitRate().toFixed(2)}%`);
  console.log(`  Avg Response Time: ${stats.averageResponseTime}ms`);
  console.log(`  Last Updated: ${stats.lastUpdated.toLocaleString()}`);
  console.log('');

  // ============================================
  // 6. Most Checked Countries
  // ============================================
  console.log('🏆 6. Most Checked Countries\n');
  
  if (stats.mostCheckedCountries.length > 0) {
    console.log('  Rank | Country        | Checks | Success Rate | Avg Time');
    console.log('  -----|----------------|--------|--------------|----------');
    stats.mostCheckedCountries.forEach((country, index) => {
      const rank = (index + 1).toString().padStart(4);
      const name = `${country.flag} ${country.countryName}`.padEnd(14);
      const checks = country.checkCount.toString().padStart(6);
      const successRate = `${country.successRate.toFixed(1)}%`.padStart(12);
      const avgTime = `${country.averageResponseTime}ms`.padStart(8);
      console.log(`  ${rank} | ${name} | ${checks} | ${successRate} | ${avgTime}`);
    });
  }
  console.log('');

  // ============================================
  // 7. Country-Specific Statistics
  // ============================================
  console.log('🇫🇷 7. France-Specific Statistics\n');
  
  const franceStats = checker.getCountryStatistics('fransa');
  if (franceStats) {
    console.log(`  ${franceStats.flag} ${franceStats.countryName}`);
    console.log(`  Total Checks: ${franceStats.checkCount}`);
    console.log(`  Success Rate: ${franceStats.successRate.toFixed(2)}%`);
    console.log(`  Avg Response Time: ${franceStats.averageResponseTime}ms`);
  }
  console.log('');

  // ============================================
  // 8. Cache Management
  // ============================================
  console.log('🔧 8. Cache Management\n');
  
  console.log('  Before clear:');
  console.log(`    Cache size: ${checker.getCacheStats().size}`);
  
  checker.clearCache();
  
  console.log('  After clear:');
  console.log(`    Cache size: ${checker.getCacheStats().size}`);
  console.log('');

  // ============================================
  // 9. Disable/Enable Cache
  // ============================================
  console.log('⚙️  9. Toggle Cache\n');
  
  console.log('  Disabling cache...');
  checker.setCacheEnabled(false);
  console.log(`  Cache enabled: ${checker.getCacheStats().enabled}`);
  
  console.log('  Enabling cache...');
  checker.setCacheEnabled(true);
  console.log(`  Cache enabled: ${checker.getCacheStats().enabled}`);
  console.log('');

  // ============================================
  // 10. Custom TTL
  // ============================================
  console.log('⏱️  10. Custom Cache TTL\n');
  
  console.log('  Setting TTL to 10 minutes...');
  checker.setCacheTTL(10 * 60 * 1000);
  console.log(`  New TTL: ${checker.getCacheStats().ttl}ms`);
  console.log('');

  console.log('✨ Demo completed successfully!');
  console.log('\n💡 Key Benefits:');
  console.log('  ✓ Faster response times with caching');
  console.log('  ✓ Reduced API calls');
  console.log('  ✓ Detailed statistics tracking');
  console.log('  ✓ Performance monitoring');
  console.log('  ✓ Configurable cache behavior');
}

main().catch(console.error);
