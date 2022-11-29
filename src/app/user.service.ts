import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() :Observable<any>{
    return this.http.get('http://localhost:9090/api/users/');
  } 

  deleteUser(id) {
    return this.http.delete('http://localhost:9090/api/users/'+id);
  }
 
}
