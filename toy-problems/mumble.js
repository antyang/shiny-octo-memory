function accum(s) {
  return [...s].map((el, i) => {
    return el.toUpperCase() + el.toLowerCase().repeat(i);
  }).join('-');
}

console.log(accum('abcd'));
