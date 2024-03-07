
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-borrowers',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-borrowers.component.html',
  styleUrl: './view-borrowers.component.css'
})
export class ViewBorrowersComponent implements OnInit {
  // private http;
  public borrowersList: any;

  private baseURL: String = "http://localhost:8081";

  public selectedBorrower: any = {
    "id": null,
    "firstName": null,
    "lastName": null,
    "userName": null,
    "email": null,
    "address": null,
    "address2": null,
    "contactNumber": null
  };

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadBorrowers();
  }
  loadBorrowers() {
    this.http.get(this.baseURL + "/borrower/get").subscribe((res: any) => {
      console.log(res);
      this.borrowersList = res;
    });

  }
  deleteBorrower() {
    this.http.delete(this.baseURL + "/borrower/remove/" + this.selectedBorrower.id, { responseType: 'text' })
      .subscribe((res: String) => {
        this.loadBorrowers();
        Swal.fire({
          title:"Deleted!",
          text:`You deleted${this.selectedBorrower.userName} success`,
          icon:"success"
        })

      })

  }
  saveBorrower() {

  }
  setSelectedBorrower(borrower: any) {
    this.selectedBorrower = borrower;
    console.log(borrower);

  }
}

// you have 35 min stop video 1.00




