export class ProductItem {
  mainImage: string;
  secondImage: string;
  name: string;
  category: string;
  currentPrice: string;
  oldPrice: string;
  isSale: boolean;
  isNew: boolean;

  constructor(
    mainImage: string,
    secondImage: string,
    name: string,
    category: string,
    currentPrice: string,
    oldPrice: string,
    isSale: boolean,
    isNew: boolean
  ) {
    this.mainImage = mainImage;
    this.secondImage = secondImage;
    this.name = name;
    this.category = category;
    this.currentPrice = currentPrice;
    this.oldPrice = oldPrice;
    this.isSale = isSale;
    this.isNew = isNew;
  }
}
