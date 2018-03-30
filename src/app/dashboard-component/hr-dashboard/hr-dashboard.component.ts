import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {
 detailsOpen: boolean;
 jobOpen: boolean;
 skillsOpen: boolean;

  constructor(private router: Router) { 
   this.detailsOpen = false; 
   this.jobOpen = false;
   this.skillsOpen = false;
  }

  ngOnInit() {
  }
  
  getDetails(){
    this.detailsOpen = true;
  }
  closeDetails() {
    this.detailsOpen = false;
  }
  getJob(){
    this.jobOpen = true;
  }
  closeJob() {
    this.jobOpen = false;
  }
  getSkills(){
    this.skillsOpen = true;
  }
  closeSkills() {
    this.skillsOpen = false;
  }

}
