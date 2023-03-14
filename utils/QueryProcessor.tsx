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
  }

  return '89';
}
