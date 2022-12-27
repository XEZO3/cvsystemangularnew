import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cvVm } from '../../Models/cv.VM';
import { env } from './env';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  constructor(private http:HttpClient) { }
 // baseUrl = "https://localhost:7189/api/User/"
  // login(login:loginDto){
  //   let url =  this.baseUrl+"login?"+"Email="+login.Email+"&Password="+login.Password;
  //   return this.http.get(url)
  // }
  // register(register:Register){
  //   let url =  this.baseUrl+"register";
  //   return this.http.post(url,register);
  // }
  // getusers(){
  //   return this.http.get(this.baseUrl);
  // }
   addCv(cv:cvVm){
       let url =  env.baseurl+"CV";
       return this.http.post(url,cv);
  }
  showCv(){
       let url =  env.baseurl+"CV";
       return this.http.get<any>(url);
  }
  // isLoggedIn(){
  //   let token = localStorage.getItem("Token");
  //   if(token){
  //     return true;

  //   }else
  //   return false
  // }
  // getRole(){
  //   let token = localStorage.getItem("Token")?.toString();
  //   if(token){
  //     let jwtData = token?.split('.')[1];
  //     let jwtjasonData = window.atob(jwtData?.toString())
  //     let jsonObject = JSON.parse(jwtjasonData);
  //     return jsonObject.role;
  //   }
    
  // }
}
