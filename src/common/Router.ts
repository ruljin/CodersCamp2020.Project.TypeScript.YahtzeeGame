class Router {
  private root: Element;

  constructor(root: Element) {
    this.root = root;
  }

  checkPath(path: string): boolean {
    return path === '' ? window.location.hash === '' : window.location.hash === `#/${path}`;
  }

  addRefreshListener(element: HTMLAnchorElement, event: string): void {
    element.addEventListener(event, this.refreshHandler);
    element.setAttribute('hasRefreshListener', 'true');
  }

  renderComponent(component: Element): void {
    this.root.appendChild(component);
  }

  private refreshHandler(evt: Event): void {
    window.location.href = (evt.currentTarget as HTMLAnchorElement).href;
    window.location.reload(true);
  }
}

export default Router;
