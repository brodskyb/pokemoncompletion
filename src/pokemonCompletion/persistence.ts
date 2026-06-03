export function serializeCategoryProgress(cat: { list: Array<{ obtained: boolean; id: string }> }) {
  return cat.list.filter(p => p.obtained).map(p => p.id).join(',');
}

export function saveCategoryProgressToStorage(
  cat: { game: string; id: string; list: Array<{ obtained: boolean; id: string }> },
  storage: Pick<Storage, 'setItem'> = globalThis.localStorage,
) {
  const str = serializeCategoryProgress(cat);
  storage.setItem(`pokemonCompletion-${cat.game}-${cat.id}`, str);
  return str;
}
