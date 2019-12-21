import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApihandlerService } from '../service/apihandler.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit, OnDestroy {


  constructor(private var_apiHandler: ApihandlerService, private activatedRoute: ActivatedRoute) { }

  subroutine: any;
  dataSet: any;
  currentDate: any;
  category: any;
  country: any;

  ngOnInit() {
    this.subroutine = this.activatedRoute.params.subscribe(params => { //subscribe needed to check for same link is triggered
      this.category = params['catg'];
      this.country = params['cntry'];
      this.sortNewsCatgData()
     
    });
  }

  //Load Categories
  public sortNewsCatgData() {

    console.log('Incoming category/country is - ' + this.category+'/'+this.country);
    this.currentDate = new Date();
    //If category is Top then set it to empty
    if(this.category === 'top'|| this.category == undefined){
      this.category = '';
    }
    if(this.country === '' || this.country == undefined){
      this.country='ca';
    }

    //service call
    this.var_apiHandler.getData(this.country, this.category).subscribe((data) => {
      var status = data['status'];
      console.log("Status is - "+status)
      if (status === 'ok') {
        this.dataSet = data['articles']
      } else {
        throwError(`Error: Status of the response is not valid - Verify the Content.ts`);
      }
    });
  }

  ngOnDestroy(): void {
    this.subroutine.unsubscribe();
    //throw new Error("Method not implemented.");
  }

}
