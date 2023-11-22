export function formatNumber(amount: number): string {
  let decimalCount: number = 2;
  let decimal: string = ',';
  let thousands: string = '.';
  let i: any = parseInt(Math.abs(amount || 0).toFixed(decimalCount)).toString();
  let j: number = i.length > 3 ? i.length % 3 : 0;
  return (
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : '')
  );
}
