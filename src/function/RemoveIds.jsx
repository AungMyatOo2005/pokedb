const RemoveIds = (arr, item) => {
  const index = arr.indexOf(item);
  return arr.slice(0, index).concat(arr.slice(index + 1));
};
export default RemoveIds;
