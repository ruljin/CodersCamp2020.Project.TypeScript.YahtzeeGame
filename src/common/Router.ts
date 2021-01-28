class Router {
  private root: Element;

  constructor(root: Element) {
    this.root = root;
  }

  checkPath(path: string): boolean {
    return path === '' ? window.location.hash === '' : window.location.hash === `#/${path}`;
  }

  static addRefreshListener(element: HTMLAnchorElement, event: string): void {
    element.addEventListener(event, Router.refreshHandler);
    element.setAttribute('hasRefreshListener', 'true');
  }

  renderComponent(component: Element): void {
    this.root.appendChild(component);
  }

  private refreshHandler(evt: Event): void {
    window.location.hash = (evt.currentTarget as HTMLAnchorElement).hash;
    window.location.reload(true);
  }
}

export default Router;
