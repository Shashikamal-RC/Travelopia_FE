import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TravelService } from 'src/app/services/travel.service';
import { TravelElement } from '../../interfaces/travelItem.interface'


@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'location',
    'num_of_travellers',
    'budget_per_person',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.travelService.getTravelProfiles().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<TravelElement>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
