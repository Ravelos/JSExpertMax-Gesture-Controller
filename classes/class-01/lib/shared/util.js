function supportsWorkersType() {
  let supports = false;

  const tester = {
    get type() {
      supports = true;
    },
  };

  try {
    new Worker("blob://", tester).terminate();
  } finally {
    return supports;
  }
}

export { supportsWorkersType };
