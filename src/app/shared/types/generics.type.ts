/**
 * Generic Object type with given key and value types
 */
export type TGenericKeyValueObject<K extends TGenericObjectKeyType, V> = {
  [key in K]: V;
};

/**
 * Possible Object key types
 */
export type TGenericObjectKeyType = string | number | symbol;
