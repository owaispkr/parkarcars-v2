export const formatPrice = (price: number | string): string => {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num)) return "";
  return num.toLocaleString("en-US");
};

export const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
