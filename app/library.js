export function isInCenter(elemento) {
  const posiciontop = elemento.getBoundingClientRect().top;
  const posicion = posiciontop + elemento.clientHeight * 0.5;
  if (
    posicion >= window.innerHeight * 0.05 &&
    posicion <= window.innerHeight * 0.95
  ) {
    return true;
  } else {
    return false;
  }
}

export function countCharacter(str, char) {
  return str.split(char).length - 1;
}