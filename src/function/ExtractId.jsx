export const ExtractId = (url) => {
  return Number(...url.match(/(?<=\/)\d+(?=\/?$)/));
};
