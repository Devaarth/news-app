import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  public inputVal: any;
  //using normal data passing instead of Reactive Form
  ngOnInit() {}
  constructor() {}

  onFormChange($event) {}
  onSearch(){
    
  }
}
