export default function QueryProcessor(query: string): string {
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
  }

  console.log(query);
  return '89';
}
