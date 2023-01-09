import { Component, OnInit } from '@angular/core';

interface Column {
  accessorKey: string;
  header: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columns: Column[] = [
    {
      accessorKey: '',
      header: "Delete"
    },
    {
      accessorKey: 'image',
      header: "Image"
    },
    {
      accessorKey: 'productName',
      header: "Name"
    },
    {
      accessorKey: 'currentPrice',
      header: "Price"
    },
    {
      accessorKey: 'available',
      header: "Available"
    },
    {
      accessorKey: '',
      header: "Add To Cart"
    }
  ];
  data = [
    {
      image: "assets/images/product/product1.jpg",
      productName: "Handbag fringilla",
      currentPrice: "£65.00",
      available: true,
    },
    {
      image: "assets/images/product/product2.jpg",
      productName: "Handbags Justo",
      currentPrice: "£90.00",
      available: true,
    },
    {
      image: "assets/images/product/product8.jpg",
      productName: "Handbag Elit",
      currentPrice: "£54.00",
      available: true,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
