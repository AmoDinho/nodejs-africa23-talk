const hello = () => {
  console.log('xxx', process.env);
  return 'Hello, New World!';
};
export const Query = {
  hello: hello,
};
