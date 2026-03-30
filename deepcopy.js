function deepCopy(obj) {
  try {
    return structuredClone(obj);
  } catch {
    if (typeof obj !== "object" || obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Map)
      return new Map(Array.from(obj, ([k, v]) => [deepCopy(k), deepCopy(v)]));
    if (obj instanceof Set) return new Set(Array.from(obj, (v) => deepCopy(v)));

    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key]);
    }
    return copy;
  }
}

let original = {
  a: 1,
  b: {
    c: 2,
  },
  d: [3, 4],
  e: new Date(),
  f: /pattern/,
  g: function () {
    return "function copied";
  },
};

const copied = deepCopy(original);

console.log(copied !== original);
console.log(copied);
console.log(original);
