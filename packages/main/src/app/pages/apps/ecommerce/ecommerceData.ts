export interface Element {
  id: number;
  imagePath: string;
  product_name: string;
  categories: string[];
  date: string;
  status: boolean;
  base_price: number;
  dealPrice: number;
  description: string;
  objectives?: string | string[];

  // Optional fields
  skill?: string;
  language?: string;
  duration?: string | number;

  discountPercent?: number;
  rating?: number;
  media?: any;
  gender?: string;
}


interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
  date: string;

}
export const PRODUCT_DATA: Element[] = [
];


export const productcards: productcards[] = [
  {
    id: 1,
    imgSrc: 'assets/images/products/s4.jpg',
    title: 'Boat Headphone',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 03, 2025',
  },
  {
    id: 2,
    imgSrc: 'assets/images/products/s5.jpg',
    title: 'MacBook Air Pro',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 10, 2025',
  },
  {
    id: 3,
    imgSrc: 'assets/images/products/s7.jpg',
    title: 'Red Velvet Dress',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 15, 2025',
  },
  {
    id: 4,
    imgSrc: 'assets/images/products/s11.jpg',
    title: 'Soft Plush Teddy',
    price: '285',
    rprice: '375',
    date: 'Tue, Apr 12, 2025',
  },
]
