import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data:any;
  input=1;
  constructor(private route: ActivatedRoute, private product:ProductlistService) { 
    this.data=[ ]
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
          console.log(params)
           let id= params.get('id');
           console.log(id)
           this.data=this.product.getId(id)
      })
  }

}
