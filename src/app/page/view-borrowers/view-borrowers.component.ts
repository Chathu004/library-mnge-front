
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-borrowers',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-borrowers.component.html',
  styleUrl: './view-borrowers.component.css'
})
export class ViewBorrowersComponent implements OnInit {
  // private http;
  public borrowersList : any;

  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.loadBorrowers();
  }
  loadBorrowers() {
    this.http.get(`http://localhost:8081/borrower/get`).subscribe((res:any)=>{
      console.log(res);
      this.borrowersList = res;
  });

}
  }


  

