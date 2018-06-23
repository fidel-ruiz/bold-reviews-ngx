import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppInfo } from './app-info.model';
import { Review } from './review';
import { ReviewService } from './review.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Api[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  displayedColumns = ['body', 'shop_domain', 'shop_name', 'start_rating', 'created_at'];
  dataSource: MatTableDataSource<Review>;


  constructor(private reviewService: ReviewService) {

  }

  ngOnInit() {
    this.reviewService.getAppsInfo()
      .subscribe((appsInfo: AppInfo[]) => {
        console.log(appsInfo);
        this.dataSource = new MatTableDataSource(appsInfo['app'][0].reviews);

      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
