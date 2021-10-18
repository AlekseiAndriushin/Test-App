export const removingDuplicateItems = (array: Array<string>) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};
