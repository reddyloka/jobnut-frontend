import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  jobData: { id: number; companyName: string; designation: string; location: string; skillRequired: string[]; }[];
  searchData: any[];
  searchInfo: boolean;
  jobInfo: boolean;
  searchText: string;

  constructor() {

    this.jobData = [
      {
        id: 1, companyName: 'Google', designation: 'software Developer', location: 'jalandhar',
        skillRequired: ['Data Structure', 'Database', 'php']
      },
      {
        id: 2, companyName: 'Microsoft', designation: 'software Engineer', location: 'Hyderabad',
        skillRequired: ['Data sStructure', 'Database', 'php', 'algorithms']
      },
      {
        id: 3, companyName: 'Wipro', designation: 'MEAN Stack Developer', location: 'Banglore',
        skillRequired: ['NodeJS', 'Angular', 'Data Structure', 'Database']
      },
      { id: 4, companyName: 'SAP', designation: 'SAP', location: 'Mumbai', skillRequired: ['SAP Education'] },
      {
        id: 5, companyName: 'Apple', designation: 'software Tester', location: 'Chennai',
        skillRequired: ['Data Structure', 'Database', 'php', 'NodeJS', 'Express']
      },
      {
        id: 6, companyName: 'HCL', designation: 'Six Months Intern', location: 'jalandhar',
        skillRequired: ['Data Structure', 'Database', 'php']
      },
      {
        id: 7, companyName: 'Tech Mahindra', designation: 'Associate software Engineer', location: 'Hyderabad',
        skillRequired: ['Data Structure', 'Database', 'php', 'algorithms']
      },
      {
        id: 8, companyName: 'Infosys', designation: 'MEAN Stack', location: 'Banglore',
        skillRequired: ['NodeJS', 'Angular', 'Data Structure', 'Database']
      },
      { id: 9, companyName: 'Tek Systems', designation: 'SAP Intern', location: 'Mumbai', skillRequired: ['SAP Education'] },
      {
        id: 10, companyName: 'Venturepact', designation: 'Associate software Tester', location: 'Chennai',
        skillRequired: ['Data Structure', 'Database', 'php', 'NodeJS', 'Express']
      }

    ];
    this.searchText = null;
    this.searchData = [];
    this.jobInfo = true;
    this.searchInfo = false;
  }

  ngOnInit() {


  }
  searchClicked() {
    if (this.searchText === null || this.searchText === undefined) {
      this.jobInfo = true;
      this.searchInfo = false;
    }

    this.searchData = this.jobData.filter((ele) => {
      if (ele.location.toLowerCase().includes(this.searchText) ||
        ele.designation.toLowerCase().includes(this.searchText) || ele.companyName.toLowerCase().includes(this.searchText)) {
        return ele;
      }
    });
    if (this.searchData != null && this.searchData !== undefined && this.searchData.length > 0) {
      this.jobInfo = false;
      this.searchInfo = true;
    }
    console.log(this.searchData);
  }

}
