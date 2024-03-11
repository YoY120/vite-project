/**
 * Размер 
 */
// export type Size = '6XL' 
//   | '5XL'
//   | '4XL' 
//   | '3XL' 
//   | '2XL' 
//   | 'XL' 
//   | 'L' 
//   | 'M' 
//   | 'S' 
//   | 'XS' 
//   | '2XS';

  export type Size = | 'XL' 
  | 'L' 
  | 'M' 
  | 'S' 
  | 'XS';
  
  export const sizeList: Size[] = ['XL', 'L', 'M', 'S', 'XS'];

  // TODO: вынести внутрь компонентов в storybook
  export const sizeListByTextField: Size[] = ['XL', 'L', 'M', 'S', 'XS'];
  