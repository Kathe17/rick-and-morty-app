export function sortByName<T extends { name: string }>(arr: T[], order: string = 'asc') {
  return arr.slice().sort((a, b) => {
    if (order === 'asc') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });
}
