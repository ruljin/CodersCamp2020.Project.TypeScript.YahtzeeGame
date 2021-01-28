class Router {
  private root: Element;

  constructor(root: Element) {
    this.root = root;
  }

  checkPath(path: string): boolean {
    return path === '' ? window.location.hash === '' : window.location.hash === `#/${path}`;
  }

  clearRoot(): void {
    this.root.innerHTML = '';
  }

  renderComponent(component: Element): void {
    this.root.appendChild(component);
  }

  addHashChangeListener(routePathsHandler: () => void): void {
    window.addEventListener('hashchange', routePathsHandler, false);
  }
}

export default Router;
