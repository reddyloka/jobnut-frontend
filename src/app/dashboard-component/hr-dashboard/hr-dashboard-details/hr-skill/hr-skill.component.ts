import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-hr-skill',
  templateUrl: './hr-skill.component.html',
  styleUrls: [],
})
export class HrSkillComponent implements OnInit {
  @Output()
  discardClick = new EventEmitter<boolean>();
  items: any;
  levels: any;
  functional: any;
  hrskillForm: FormGroup;

  constructor() {
    this.buildFormGroup();
    this.items = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];

    this.levels = ['Junior level', 'Mid level', 'High level', 'Top management level'];

    this.functional = ['Accounts / Finance / Tax / CS / Audit', 'Architecture / Interior Design', 'Web / Graphic Design / Visualiser', 'Hotels / Restaurants', 'Content / Journalism', 'Banking / Insurance', 'Corporate Planning / Consulting', 'ITES / BPO / KPO / Customer Service / Operations', 'Self Employed / Consultants', 'Export / Import / Merchandising', 'Secretary / Front Office / Data Entry', 'HR / Administration / IR', 'Legal', 'Purchase / Logistics / Supply Chain', 'Marketing / Advertising / MR / PR', 'Pharma / Biotech / Healthcare / Medical / R&D', 'Packaging', 'Production / Maintenance / Quality', 'Site Engineering / Project Management', 'Engineering Design / R&D', 'Sales / BD', 'Teaching / Education', 'IT- Hardware / Telecom / Technical Staff / Support', 'Top Management', 'Other', 'Fashion / Garments / Merchandising', 'TV / Films / Production', 'Ticketing / Travel / Airlines', 'Guards / Security Services', 'Agent', 'IT Software - Application Programming / Maintenance', 'IT Software - Client Server', 'IT Software - DBA / Datawarehousing', 'IT Software - ERP / CRM', 'IT Software - Embedded /EDA /VLSI /ASIC /Chip Des.', 'IT Software - Network Administration / Security', 'IT Software - QA & Testing', 'IT Software - System Programming', 'IT Software - Telecom Software', 'IT Software - Systems / EDP / MIS', 'IT Software - E-Commerce / Internet Technologies', 'IT Software - Mainframe', 'IT Software - Mobile', 'IT Software - Middleware', 'IT Software - Other', 'Analytics & Business Intelligence', 'Shipping', 'CSR & Sustainability', 'Beauty / Fitness / Spa Services'];
  }

  buildFormGroup(): void {
    const fg = {
      'industry': new FormControl(null, Validators.required),
      'functional': new FormControl(null, Validators.required),
      'level': new FormControl(null, [Validators.required]),
      'client': new FormControl(null, Validators.required),
      'skills': new FormControl(null, Validators.required),
    };
    this.hrskillForm = new FormGroup(fg);
  }

  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      debug: true,
      performance: true,
    });
  }

  discardClicked() {
    this.discardClick.emit(true);
  }
  onSubmit() {
    console.log(this.hrskillForm);
  }
}
