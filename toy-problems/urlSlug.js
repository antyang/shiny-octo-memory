function urlSlug(title) {
  return title.trim()
              .split(' ')
              .map(word => word.toLowerCase())
              .filter(word => word !== "")
              .join('-')
}

console.log(urlSlug('Transform thIs tO Slug CASE'));
console.log(urlSlug(' Transform thIs tO Slug   CASE too '));
