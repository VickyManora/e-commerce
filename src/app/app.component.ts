import { Component } from '@angular/core';
import { ProductlistService } from './productlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-site';
  public data:any;
  p: number = 1;
  count: number = 6;
 
  lowToHigh(){
 
    console.log("hi");
    this.data.sort((a:any,b:any) => {
      console.log(a.price,b.price)
       if (a.price > b.price) {    
                  return 1;    
              } else if (a.price < b.price) {    
                  return -1;    
              }    
              return 0;    })
 
}
highToLow(){
 
  console.log("hi");
  this.data.sort((a:any,b:any) => {
    console.log(a.price,b.price)
     if (a.price < b.price) {    
                return 1;    
            } else if (a.price > b.price) {    
                return -1;    
            }    
            return 0;    })

}

    

  constructor(public product:ProductlistService) {
    console.log('Application loaded. Initializing data.');
        
    this.data=this.product.get();
     }
   

}
