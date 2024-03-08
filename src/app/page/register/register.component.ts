import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  private http;
  public countryList:any;
  public selectedCountry:any;
  public isExistUser:any;
  public selectedCountryCode:any
  public userObj ={
    firstName:null,
    lastName:null,
    userName:null,
    email:null,
    address:null,
    address2:null,
    country:null,
    contactNumber:null
  }

  constructor(private httpClient: HttpClient,public router:Router){
    this.http= httpClient;
  }
  
  ngOnInit(): void {
    this.loadCountryList();
  }
  loadCountryList(){
    let api = "https://restcountries.com/v3.1/all"
    this.http.get(api).subscribe(Response=>{
      this.countryList = Response;
      console.log(this.countryList);
      
    })
  }
  setSelectedCountry(country:any){
    this.selectedCountry=country;
    this.selectedCountryCode=country.idd.root+""+country.idd.suffixes[0];
    console.log(this.selectedCountryCode);
    
    console.log(this.selectedCountry);
    
  }
  submitForm(){
    console.log(this.userObj);
    this.http.get(`http://localhost:8081/borrower/is-exist-userName/${this.userObj.userName}`).subscribe(data=>{
    console.log(data);
    this.isExistUser=data;
    this.registerUser(this.isExistUser);
    
    })
    
  }
  registerUser(isExistUser:any){
    if(!isExistUser==true){
      this.http.post("http://localhost:8081/borrower/add",this.userObj).subscribe(data=>{
        Swal.fire({
          title:"Success",
          text:`${this.userObj.userName} has been registered !`,
          icon:"success"
      })
      this.router.navigate(['/login']);
      })
    }else{
      Swal.fire({
        title:"Can't Register this User",
        text:`${this.userObj.userName} has already been registered !`,
        icon:"error"
    })
    }
  }

}
