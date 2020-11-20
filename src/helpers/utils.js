const convertToRupiah = (e) => {
  let value = e;
  if (!value) return 'Rp. 0';
  if (typeof value != 'number') value = parseInt(value);
  let rupiah = '';
  const valueReverse = value.toString().split('').reverse().join('');
  for (let i = 0; i < valueReverse.length; i++) {
    if (i % 3 == 0) rupiah += valueReverse.substr(i, 3) + '.';
  }
  const valueUnReverse = rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('');
  return `Rp. ${valueUnReverse}`;
}

export {
  convertToRupiah
}