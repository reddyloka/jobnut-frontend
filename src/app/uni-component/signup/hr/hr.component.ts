<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import { BattutaService } from '../../../services/battuta.service';
>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
<<<<<<< HEAD
  signupForm: FormGroup;


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
  }

  options = ['Textiles / Garments / Fashion / Accessories', 'Accounting / Finance', 'Advertising / PR / MR / Event Management', 'Agriculture / Dairy', 'Hotels / Restaurants / Airlines / Travel', 'Architecture / Interior Design', 'Automobile / Auto Anciliary / Auto Components', 'Pharma / Biotechnology / Clinical Research', 'Construction / Engineering / Cement / Metals', 'Chemicals / PetroChemical / Plastics / Rubber', 'FMCG / Foods / Beverage', 'Consumer Goods / Durables', 'Courier / Transportation / Freight/ Warehousing', 'BPO / Call Centre / ITES', 'Education / Teaching / Training', 'Recruitment', 'Media / Dotcom / Entertainment', 'Export / Import', 'Gems / Jewellery', 'IT Hardware / Networking', 'Medical / Healthcare / Hospital', 'Insurance', 'Legal', 'Industrial Products/ Heavy Machinery', 'NGO / Social Services', 'Office Equipment / Automation', 'Oil and Gas / Power / Infrastructure / Projects', 'Packaging / Printing', 'Real Estate / Property', 'Retail', 'Security / Law Enforcement', 'IT Software / Software Services', 'Semiconductors / Electronics', 'Telecom/ISP', 'Other', 'Shipping/Marine', 'Animation / Gaming', 'Banking/FinancialServices/Broking', 'Brewery/Distillery', 'Ceramics/Sanitaryware', 'Government/Defence', 'Electricals/Switchgears', 'FacilityManagement', 'fertilizers/Pesticides', 'FoodProcessing', 'HeatVentilation/AirConditioning', 'KPO/Research/Analytics', 'Mining', 'Publishing', 'Steel', 'Strategy/ManagementConsultingFirms', 'Tyres', 'WaterTreatment/WasteManagement', 'Wellness/Fitness/Sports'];
  constructor() { }

 

  onSubmit() {
    console.log(this.signupForm);
=======
  BATTUTA_KEY: string;
  currentCities: any;
  urlBattuta: string;
  xmlRequest: any;
  data: any;
  countries: any;
  constructor(private _battutaService: BattutaService) {
    this.xmlRequest = new XMLHttpRequest();
    this.BATTUTA_KEY = 'bfb4d38ec36b68f262c513b839c81229';
    this.currentCities = [];
    this.countries = {
    };
    this.urlBattuta = `https://battuta.medunes.net/api/country/all/?key=00000000000000000000000000000000`;
  }

  ngOnInit() {
    this._battutaService.getCountries()
    .subscribe((data) => {
      console.log('data recievd', data);
    }, err => console.log('error: ', err));

>>>>>>> 5ff6da708c72b35e02324dfb35d6cb719a8217fc
  }
  

  countryAdded() {
    // fetch
  }


  //   <script>

  //
  //       $.getJSON(url,function(countries)
  //       {
  //           console.log(countries);
  //         $('#country').material_select();
  //           //loop through countries..
  //           $.each(countries,function(key,country)
  //           {
  //               $("<option></option>")
  //                               .attr("value",country.code)
  //                               .append(country.name)
  //                               .appendTo($("#country"));

  //           }); 
  //           // trigger "change" to fire the #state section update process
  //           $("#country").material_select('update');
  //           $("#country").trigger("change");


  //       });

  //       $("#country").on("change",function()
  //       {

  //           countryCode=$("#country").val();

  //           // Populate country select box from battuta API
  //           url="https://battuta.medunes.net/api/region/"
  //           +countryCode
  //           +"/all/?key="+BATTUTA_KEY+"&callback=?";

  //           $.getJSON(url,function(regions)
  //           {
  //               $("#region option").remove();
  //               //loop through regions..
  //               $.each(regions,function(key,region)
  //               {
  //                   $("<option></option>")
  //                                   .attr("value",region.region)
  //                                   .append(region.region)
  //                                   .appendTo($("#region"));
  //               });
  //               // trigger "change" to fire the #state section update process
  //               $("#region").material_select('update');
  //               $("#region").trigger("change");

  //           }); 

  //       });
  //       $("#region").on("change",function()
  //       {

  //           // Populate country select box from battuta API
  //           countryCode=$("#country").val();
  //           region=$("#region").val();
  //           url="https://battuta.medunes.net/api/city/"
  //           +countryCode
  //           +"/search/?region="
  //           +region
  //           +"&key="
  //           +BATTUTA_KEY
  //           +"&callback=?";

  //           $.getJSON(url,function(cities)
  //           {
  //               currentCities=cities;
  //               var i=0;
  //               $("#city option").remove();

  //               //loop through regions..
  //               $.each(cities,function(key,city)
  //               {
  //                   $("<option></option>")
  //                                   .attr("value",i++)
  //                                   .append(city.city)
  //                           .appendTo($("#city"));
  //               });
  //               // trigger "change" to fire the #state section update process
  //               $("#city").material_select('update');
  //               $("#city").trigger("change");
  //           }); 
  //       }); 
  //       $("#city").on("change",function()
  //       {
  //         currentIndex=$("#city").val();
  //         currentCity=currentCities[currentIndex];
  //         city=currentCity.city;
  //         region=currentCity.region;
  //         country=currentCity.country;
  //         lat=currentCity.latitude;
  //         lng=currentCity.longitude;
  //         $("#location").html('<i class="fa fa-map-marker"></i> <strong> '+city+"/"+region+"</strong>("+lat+","+lng+")");
  //       });
  // </script>





}
