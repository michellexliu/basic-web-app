function isSquareAndCube(num: number) {
  // Check if the number is a perfect square
  const squareRoot = Math.sqrt(num);
  if (squareRoot !== Math.floor(squareRoot)) {
    return false;
  }

  // Check if the number is a perfect cube
  const cubeRoot = Math.cbrt(num);
  if (cubeRoot !== Math.floor(cubeRoot)) {
    return false;
  }

  // The number is both a square and a cube
  return true;
}

function isPrime(num: number) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const mathSplit = (query: string, op: string) => {
  return query
    .replaceAll('What is ', '')
    .replaceAll('?', '')
    .split(op)
    .map((w) => parseInt(w));
};

export default function QueryProcessor(query: string): string {
  const lower = query.toLowerCase().replace('?', '');
  if (query.toLowerCase().includes('is the largest')) {
    const nums = query
      .replaceAll('Which of the following numbers is the largest: ', '')
      .replaceAll('?', '')
      .split(', ')
      .map((w) => parseInt(w));
    return String(Math.max(...nums));
  } else if (query.toLowerCase().includes('plus')) {
    const nums = query
      .replaceAll('What is ', '')
      .replaceAll('?', '')
      .split(' plus ')
      .map((w) => parseInt(w));
    return String(nums[0] + nums[1]);
  } else if (query.toLowerCase().includes('multiplied by')) {
    const nums = query
      .replaceAll('What is ', '')
      .replaceAll('?', '')
      .split(' multiplied by ')
      .map((w) => parseInt(w));
    return String(nums[0] * nums[1]);
  } else if (query.toLowerCase().includes(' minus ')) {
    const nums = query
      .replaceAll('What is ', '')
      .replaceAll('?', '')
      .split(' minus ')
      .map((w) => parseInt(w));
    return String(nums[0] - nums[1]);
  } else if (lower.includes('square and a cube')) {
    const nums = query
      .replaceAll(
        'Which of the following numbers is both a square and a cube: ',
        ''
      )
      .replaceAll('?', '')
      .split(', ')
      .map((w) => parseInt(w));

    const filtered = nums.filter((num) => isSquareAndCube(num));

    return String(filtered[0]);
  } else if (lower.includes('are primes')) {
    const nums = query
      .replaceAll('Which of the following numbers are primes: ', '')
      .replaceAll('?', '')
      .split(', ')
      .map((w) => parseInt(w));

    const filtered = nums.filter((num) => isPrime(num));

    return String(filtered.join(', '));
  }

  return '';
}
