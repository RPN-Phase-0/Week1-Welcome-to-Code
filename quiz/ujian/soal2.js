function balikKata(kata) {
  let kataTerbalik ='';
  for (let i = kata.length - 1; i>=0; i--) {
    kataTerbalik += kata[i];
  }
  return kataTerbalik;
}
console.log(balikKata('Halo Semuanya, apa kabar coi'));
