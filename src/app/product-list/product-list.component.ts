import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnDestroy {
  filter:any={
               
  }
  htlclicked:any=false;
  lthclicked:any=false;
  input:any;
  min:any;
  max:any;
  title = 'shopping-site';
  public data:any;
  p: number = 1;
  count: number = 18;
  search(){
    this.htlclicked=false;
    this.lthclicked=false;
    this.min='';
    this.max='';
    this.data=this.product.get();
     this.data=this.data.filter((elem:any)=>{
               return elem.title.toLowerCase().includes(this.input.toLowerCase());
           })
        };
  range(){ this.data=this.product.get();
           if(this.filter.input){
            this.data=this.data.filter((elem:any)=>{
              return elem.title.toLowerCase().includes(this.input.toLowerCase());
          })
           }
           this.data=this.data.filter((elem:any)=>{
               return elem.price<this.max && elem.price>this.min;
           })
        }      
  lowToHigh(){
  
    
   
   this.sortData(this.data);
   this.htlclicked=false;
   this.lthclicked=true;
      
            
}
 
highToLow(){
 this.lthclicked=false;
 this.htlclicked=true;
  this.data.sort( (a:any,b:any) => {
    console.log(a.price,b.price)
     if (a.price < b.price) {    
                return 1;    
            } else if (a.price > b.price) {    
                return -1;      
            }    
            return 0; })
           
}


 sortData(data: any[]){
  
 
 let arr = data.sort((a:any,b:any) => {
    console.log(a.price,b.price)
     if (a.price > b.price) {    
      return 1;    
            } else if (a.price < b.price) {    
    return -1;    
            }    
            return 0;    })
           
            return arr;
}

 

  constructor(public product:ProductlistService) {
    console.log('Application loaded. Initializing data.');
        
    this.data=this.product.get();
    this.filter=this.product.getFilter();
    this.input=this.filter.input;
    this.min=this.filter.rangeMin;
    this.max=this.filter.rangeMax;
    this.htlclicked=this.filter.htl;
    this.lthclicked=this.filter.lth;
    if( this.input|| this.min|| this.max){
      this.data=this.filter.filterData;
    }
       
    
     }

     ngOnDestroy(){
      this.product.setFilter(this.input,this.min,this.max,this.data,this.lthclicked,this.htlclicked)
     }
   
}
