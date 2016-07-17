import {Component, OnInit} from "@angular/core";
import {DevRantService} from "../dev-rant.service";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'app-json-feed',
  templateUrl: 'json-feed.component.html',
  styleUrls: ['json-feed.component.css']
})
export class JsonFeedComponent implements OnInit {
  private rants:any[] = [];
  private sort:String = 'recent';
  private validSorts = ['recent', 'top', 'algo'];

  constructor(private devRant:DevRantService, private route:Router) {

  }

  ngOnInit() {
    this.route
      .routerState
      .queryParams
      .subscribe(params => {
        console.log(params);
        let sort = params['sort'];
        if (this.validSorts.indexOf(sort) >= 0) {
          this.sort = sort;
        }
        this.getMoreRants();
      });
  }

  getMoreRants() {
    this.devRant.getRants(this.sort, this.rants.length).subscribe(
      rants => rants.forEach(rant => this.rants.push(rant))
    );
  }

  getLines(rant) {
    let result = rant.text.split('\n');
    rant.lines = result;
    return result;
  }

  loadComments(rant) {
    rant.loadingComments = true;
    this.devRant.getComments(rant.id).subscribe(
      comments => {
        rant.comments = comments;
        rant.loadingComments = false;
      }
    );
  }

  escape(text:String):String {
    return JSON.stringify(text).split('\\n').join('" + \n "');
  }
}
