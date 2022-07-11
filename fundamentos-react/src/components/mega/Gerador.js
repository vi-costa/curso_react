
function gerarNumeroNaoContido(min,max,array) {
  const aleatorio = parseInt(Math.random()
  *(max-min) + min)
  return array.includes(aleatorio) ? 
  gerarNumeroNaoContido(min, max,array) : 
  aleatorio
}

console.log(gerarNumeros(7))
