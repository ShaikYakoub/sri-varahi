// In production, cache is immutable (1 year); in development, cache is editable (no cache)
const CACHE_DURATION =
  process.env.NODE_ENV === "production" ? 31_536_000_000 : 0; // 1 year in ms
let cache: unknown = null;
let lastFetch = 0;

export async function getCachedGoldRate<T>(
  fetcher: () => Promise<T>,
): Promise<T> {
  const now = Date.now();

  if (
    CACHE_DURATION > 0 &&
    cache !== null &&
    now - lastFetch < CACHE_DURATION
  ) {
    return cache as T;
  }

  const freshData = await fetcher();
  cache = freshData;
  lastFetch = now;

  return freshData;
}
