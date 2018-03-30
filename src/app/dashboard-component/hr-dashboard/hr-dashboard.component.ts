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

<<<<<<< HEAD
  constructor(private router: Router) { 
   this.detailsOpen = false; 
   this.jobOpen = false;
   this.skillsOpen = false;
=======

  constructor(private router: Router) {
    this.detailsOpen = false;
    this.jobOpen = false;
    this.skillsOpen = false;
>>>>>>> 43d5fe62d12d9ef85437eed5de6361c9d228dd3d
  }

  ngOnInit() {
  }
<<<<<<< HEAD
  
  getDetails(){
=======
  getDetails() {
>>>>>>> 43d5fe62d12d9ef85437eed5de6361c9d228dd3d
    this.detailsOpen = true;
  }
  closeDetails() {
    this.detailsOpen = false;
  }
  getJob() {
    this.jobOpen = true;
  }
  closeJob() {
    this.jobOpen = false;
  }
  getSkills() {
    this.skillsOpen = true;
  }
  closeSkills() {
    this.skillsOpen = false;
  }

}
