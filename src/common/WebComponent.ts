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

function createElementFromElements(containerName = '', ...elements: Element[]): Element {
  const div = document.createElement('div');
  if (containerName != '') div.classList.add(containerName);

  for (const element of elements) {
    div.append(element);
  }

  return div;
}

export default WebComponent;
export { createElementFromString, createElementFromElements };
