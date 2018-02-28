type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
};

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
