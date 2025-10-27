
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const functionPalindromo = (palindromo) => {
  const palindromo1 = palindromo.trim().toLowerCase().replace(/[^a-z0-9]/gi, '').split('').join(",")
  const palindromo2 = palindromo.trim().toLowerCase().replace(/[^a-z0-9]/gi, '').split('').reverse().join(",")
  const isPalindromo = (palindromo1 === palindromo2) ? 'Es palíndromo ' : 'No es palíndromo';
  console.log(isPalindromo);
}

functionPalindromo('me gusta la papaya')


const functionCouter = (texto) => {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  const couter = texto.toLowerCase().split('').filter(char => vocales.includes(char)).length;
  console.log({ couter });

}


functionCouter("viva will salgado")


const functionAnagrama = (anagrama, palabra) => {
  anagrama = anagrama.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('')
  const isAnagrama = (palabra == anagrama) ? 'Es anagrama' : 'No es anagrama';
  console.log({ isAnagrama });
}


functionAnagrama('cara', 'arca')


const functionMost = (most) => {
  const palabras = most.toLowerCase().replace(/[^a-záéíóúüñ\s]/gi, '').split(/\s+/)             

  const contador = {};
  for (const palabra of palabras) {
      if (palabra) { 
          contador[palabra] = (contador[palabra] || 0) + 1;
      }
  }


  let masFrecuente = null;
  let maxFrecuencia = 0;

  for (const palabra in contador) {
      if (contador[palabra] > maxFrecuencia) {
          masFrecuente = palabra;
          maxFrecuencia = contador[palabra];
      }
  }

  return console.log(`La palabra mas frecuente es:'${masFrecuente}'`);
  ;
}

functionMost("palito, palito palito, palito palito palito, palito b corta");