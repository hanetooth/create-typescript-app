window.onload = async () => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.innerText = 'Waiting for next chunk...';
  root?.appendChild(container);
  // Code splitting example.
  try {
    const { default: setImg } = await import('@src/demo');
    setImg(container);
  } catch (error) {
    console.error('Error in splitted moduel: ', error);
  }
}

export function sum(a: number, b: number) {
  return a + b;
}
