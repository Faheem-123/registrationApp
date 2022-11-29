import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(orders){
      return this.http.post('http://localhost:9090/api/order',  orders).pipe(
        // catchError(this.handleError)
      );
    }

    getAllOrders() :Observable<any>{
     
      return this.http.get('http://localhost:9090/api/orders');
    }
  
    
  
    getOrderById(id: any) {
      return this.http.get('http://localhost:9090/api/order/'+id);
    }
  
    deleteOrder(id) {
      return this.http.delete('http://localhost:9090/api/order/'+id);
    }


    updateOrder(data: any): Observable<any> {

      return this.http.put('http://localhost:9090/api/order/'+ data.id,data).pipe(
        // catchError(this.handleError)
      );
    }
}
