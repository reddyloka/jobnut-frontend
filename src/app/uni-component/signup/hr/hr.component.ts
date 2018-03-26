import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  signupForm: FormGroup;
  options: any;
  imageFile: boolean;
  profilePhoto: any;
  hrsignupActive: boolean;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'first': new FormControl(null, Validators.required),
      'last': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'option': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });
    this.imageFile = false;
    this.hrsignupActive = true;
  }

  constructor() {
    this.options = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];
   }


  onSubmit() {
    console.log(this.signupForm);
  }

  fileTypeCheck(event): any {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.split('/')[0] === 'image') {
        const reader = new FileReader();
        reader.onload = (rdr) => {
          console.log('image: ', file.type.split('/')[0]);
          this.imageFile = false;
        };
        // reader reads the image uploaded
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert('Filetype Not Supported.');
        this.imageFile = true;
        // this.fileTypeCheck(event);
      }
    }


  }


}
