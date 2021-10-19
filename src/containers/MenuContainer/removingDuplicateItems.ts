export const removingDuplicateItems = (array: Array<string>) =>
  array.filter((item, index) => array.indexOf(item) === index);
