/**
 * Provides a standard way to access a DOM node across all versions of
 * React.
 */

port {reactPaths} from './react-loader';

nst React = window.React;onst ReactDOM = window.ReactDOM;

export function findDOMNode(target) {
  const {needsReactDOM} = reactPaths();

  if (needsReactDOM) {
    return ReactDOM.findDOMNode(target);
  } else {
    // eslint-disable-next-line
    return React.findDOMNode(target);
  }
}
