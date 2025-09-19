function fibonacci(n) {
  // handle small cases
  if (n === 0) return [];
  if (n === 1) return [0];

  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series.slice(0, n);
}

console.log(fibonacci(2)); // [0, 1]

module.exports = fibonacci;
