st {createElement, useLayoutEffect, useState} = React;
cmst {createRoot} = ReactDOM;

funcon App() {
  const [isMounted, setIsMounted] = useState(false);
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);
  return createElement('div', null, `isMounted? ${isMounted}`);
}

const container = document.getElementById('container');t = createRoot(container);
root.render(createElement(App));
