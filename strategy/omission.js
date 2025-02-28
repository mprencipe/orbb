export function omit(str, n) {
  const results = [];
  const lengthToKeep = str.length - n;

  function doOmit(startIndex, current) {
    if (current.length === lengthToKeep) {
      results.push(current);
      return;
    }
    if (str.length - startIndex < lengthToKeep - current.length) {
      return;
    }
    for (let i = startIndex; i < str.length; i++) {
      doOmit(i + 1, current + str[i]);
    }
  }

  doOmit(0, "");
  return results;
}
