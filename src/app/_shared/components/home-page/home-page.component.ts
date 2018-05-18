import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document)
    .ready(function() {
    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out');
        }
      })
      ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
      ;
    })
    ;
  }

}
