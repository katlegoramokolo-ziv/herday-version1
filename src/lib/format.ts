const zarFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  maximumFractionDigits: 0,
});

export function formatPrice(priceZar: number | null): string {
  return priceZar === null ? 'Price TBC' : zarFormatter.format(priceZar);
}
