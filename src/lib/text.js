export function splitTitle(title) {
  const words = title.split(' ')
  if (words.length <= 1) return [title, '']
  return [words[0], words.slice(1).join(' ')]
}
