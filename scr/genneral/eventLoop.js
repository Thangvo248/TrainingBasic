const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
  new Promise((resolve, reject) =>
  resolve('shouldd be right after baz, before bar')
).then((resolve) => console.log(resolve));
  console.log('foo');
  setTimeout(bar, 0);
  baz();
};

foo();