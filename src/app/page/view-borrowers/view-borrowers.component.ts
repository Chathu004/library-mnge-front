
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
  private http;
  public borrowersList : any={};

  constructor(private httpClient : HttpClient){
    this.http = httpClient;
  }


  ngOnInit(): void {
    this.loadBorrowers();
  }
  loadBorrowers() {
    this.http.get(`http://localhost:8080/borrowers/get`).subscribe((data)=>{
      this.borrowersList = data;
      console.log(this.borrowersList);
  });

}
}
