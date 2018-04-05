import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserBaseService } from '../../../services/userbase/user-base.service';
import { Router } from '@angular/router';
import { Userbase } from '../../../model/userbase';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  signupForm: FormGroup;
  options: any;
  states: any;
  imageFile: boolean;
  hrsignupActive: boolean;

  // my variables Abhhishek Mittal
  user_details: Userbase;
  profile_photo: File;
  userExist: boolean;

  ngOnInit() {
    this.imageFile = false;
    this.hrsignupActive = true;
  }

  constructor(private _userService: UserBaseService,
    private router: Router) {
    this.options = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];

    this.states = [
      'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttaranchal', 'West Bengal'
    ];



    this.user_details = Userbase.createBlankUser();
    this.buildFormGroup();
    this.profile_photo = null;
    // this.userExist = false;
    // this.user_details.isHr = true;
    // this.user_details.status = true;
  }

  buildFormGroup(): void {
    const fg = {
      'fname': new FormControl(this.user_details.fname, Validators.required),
      'lname': new FormControl(this.user_details.lname),
      'password': new FormControl(this.user_details.password, Validators.required),
      'email': new FormControl(this.user_details.email, [Validators.required, Validators.email]),
      'industry': new FormControl(this.user_details.industry, Validators.required),
      'designation': new FormControl(this.user_details.designation, Validators.required),
      'address': new FormControl(this.user_details.address, Validators.required),
      'country': new FormControl(this.user_details.country, Validators.required),
      'states': new FormControl(this.user_details.state, Validators.required),
      'city': new FormControl(this.user_details.city, Validators.required),
      'profilePhoto': new FormControl(null),
      // 'option': new FormControl(null, Validators.required),
      // 'address': new FormControl(null, Validators.required),
    };
    this.user_details.isHr = true;
    this.user_details.status = true;

    this.signupForm = new FormGroup(fg);
  }

  onSubmit(): void {
    // this.buildFormGroup();
    console.log(this.user_details);
    // send data
    // setTimeout(() => {
    this._userService.addNewUser(this.user_details, {
      profile_photo: this.profile_photo
    })
      .then((result) => {
        console.log(result);
      });
    // }, 2000);
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
        this.profile_photo = event.target.files[0];
      } else {
        alert('Filetype Not Supported.');
        this.imageFile = true;
        // this.fileTypeCheck(event);
      }
    }


  }


}
