const cache = new Map<string, Promise<any>>();

export function cachePromise<T>(
  key: string,
  factory: () => Promise<T>
): Promise<T> {
  if (!cache.has(key)) {
    cache.set(key, factory());
  }
  return cache.get(key)!;
}
