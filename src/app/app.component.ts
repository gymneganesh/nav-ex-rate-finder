
import { Component } from '@angular/core';
import {ForExSelectorComponent} from './forEx/for-ex-selector.component';
declare var _:any;



@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.style.css'],
  directives:[ForExSelectorComponent]
})
export class AppComponent {
   title :string = "Exchange Rate Finder"
   
}

