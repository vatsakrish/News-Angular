import { Component, OnInit } from '@angular/core';
import { NewsContentComponent } from '../news-content/news-content.component';
import { ApihandlerService } from '../service/apihandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-sidebar-drawer',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {
  
  cntryVal: any;
  catg: any;

  constructor(private var_apiHandler: ApihandlerService, private router: Router) { }

  ngOnInit() {
    this.cntryVal='ca';
    this.catg='top';
  }

  array_of_Cntry = [
    { id: 'ca', name: "Canada" },
    { id: 'in', name: "India" },
    { id: 'us', name: "United States" }
  ];

  // newsContent = new NewsContentComponent(this.var_apiHandler);
  
  // public getNewsCatgTrigger (catg: any){
  //   console.log (catg + ' - triggered in News Display Component');
  //   this.newsContent.sortNewsCatgData(catg);
  // }
  public onDrpDwnChange(event): void {  // event will give you full breif of action
    this.cntryVal = event.target.value;
    console.log(this.cntryVal);
    this.router.navigate(['news/'+this.cntryVal+'/'+this.catg]);
  }

  getNewsCatgTrigger (catg: any) {
    this.catg = catg;
    this.router.navigate(['news/'+this.cntryVal+'/'+catg]);
  }

}
