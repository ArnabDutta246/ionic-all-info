import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService {

  // api link
  url = "https://jsonplaceholder.typicode.com/posts"
 CRUDurl = {
   getSingle:`https://jsonplaceholder.typicode.com/posts`
 }
  constructor() { }
}
