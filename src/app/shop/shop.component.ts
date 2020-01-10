import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  vendors = [
  	{
  		"name": "Grab $5 Voucher",
  		"logo": "https://www.grab.com/sg/wp-content/uploads/sites/4/2018/02/cropped-GRAB-Vector-Logo-720x340-1-e1519119683340.png",
  		"points": 5000
  	},
  	{
  		"name": "Grab $10 Voucher",
  		"logo": "https://www.grab.com/sg/wp-content/uploads/sites/4/2018/02/cropped-GRAB-Vector-Logo-720x340-1-e1519119683340.png",
  		"points": 10000
  	},
  	{
  		"name": "Grab $50 Voucher",
  		"logo": "https://www.grab.com/sg/wp-content/uploads/sites/4/2018/02/cropped-GRAB-Vector-Logo-720x340-1-e1519119683340.png",
  		"points": 50000
  	},
  	{
  		"name": "Grab $100 Voucher",
  		"logo": "https://www.grab.com/sg/wp-content/uploads/sites/4/2018/02/cropped-GRAB-Vector-Logo-720x340-1-e1519119683340.png",
  		"points": 100000
  	},
  	{
  		"name": "Lazada $5 Voucher",
  		"logo": "https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151843/Lazada-master-logo-330x198.png",
  		"points": 5000
  	},
  	{
  		"name": "Lazada $10 Voucher",
  		"logo": "https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151843/Lazada-master-logo-330x198.png",
  		"points": 10000
  	},
  	{
  		"name": "Lazada $50 Voucher",
  		"logo": "https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151843/Lazada-master-logo-330x198.png",
  		"points": 50000
  	},
  	{
  		"name": "Lazada $100 Voucher",
  		"logo": "https://s3-ap-southeast-1.amazonaws.com/images.marketing-interactive.com/wp-content/uploads/2019/06/19151843/Lazada-master-logo-330x198.png",
  		"points": 100000
  	}
  ]

  constructor() { }

  ngOnInit() {
  }

}
