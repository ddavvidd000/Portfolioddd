/*export function isInCenter(elemento) {
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

export function jsHover(){

}*/

class ddLibrary {
  constructor(element) {
    if (element instanceof HTMLElement) {
      this.element = element;
    } else if (typeof element === 'string') {
      if(false) this.element = document.querySelector(element);
      this.str = element;
    } else {
      throw new Error('El argumento debe ser un HTMLElement o un selector de cadena válido.');
    }
  }

  css(property, value) {
    this.element.style[property] = value;
    return this;
  }

  on(event, handler) {
    this.element.addEventListener(event, handler);
    return this;
  }

  isInCenter() {
    const posiciontop = this.element.getBoundingClientRect().top;
    const posicion = posiciontop + this.element.clientHeight * 0.5;
    if (
      posicion >= window.innerHeight * 0.05 &&
      posicion <= window.innerHeight * 0.95
    ) {
      return true;
    } else {
      return false;
    }
  }

  hover(enter=()=>{}, leave=()=>{}){
    this.element.addEventListener('mouseenter', enter);
    this.element.addEventListener('mouseleave', leave);
  }

  countCharacter(char) {
    return this.str.split(char).length - 1;
  }
}

export function d(element) {
  return new ddLibrary(element);
}