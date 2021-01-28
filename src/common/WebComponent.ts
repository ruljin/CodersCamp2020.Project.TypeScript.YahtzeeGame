interface WebComponent {
  render(): Element;
  setup(): void;
}

function createElementFromString(elementString: string): Element {
  const element = document.createElement('div');
  element.innerHTML = elementString;

  const createdElement = element.firstElementChild;
  if (createdElement === null) {
    throw 'Incorrect argument';
  }

  return createdElement;
}

export default WebComponent;
export { createElementFromString };
