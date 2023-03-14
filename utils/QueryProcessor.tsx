export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes('is the largest')) {
    const nums = query
      .replaceAll('Which of the following numbers is the largest: ', '')
      .replaceAll('?', '')
      .split(', ')
      .map((w) => parseInt(w));
    return String(Math.max(...nums));
  }

  console.log(query);
  // return 89;
}
