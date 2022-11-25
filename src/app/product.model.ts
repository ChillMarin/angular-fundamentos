export interface Product {
  name: string;
  price: number;
  image: string;
  // Esto hace que sea opcional colocar una categoria usando el ?
  category?: string;
}
