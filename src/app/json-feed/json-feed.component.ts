import {Component, OnInit, HostListener} from "@angular/core";
import {DevRantService} from "../dev-rant.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-json-feed',
  templateUrl: 'json-feed.component.html',
  styleUrls: ['json-feed.component.css']
})
export class JsonFeedComponent implements OnInit {
  private rants:any[] = [];
  private sort:String = 'recent';
  private validSorts = ['recent', 'top', 'algo'];
  private loading = false;

  constructor(private devRant:DevRantService, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        let sort = params['sort'];
        if (this.validSorts.indexOf(sort) >= 0) {
          this.sort = sort;
        }
        this.getMoreRants();
      });
  }

  getMoreRants() {
    console.debug("Fetching more Rants");
    this.loading = true;
    this.devRant.getRants(this.sort, this.rants.length).subscribe(
      rants => {
        rants.forEach(rant => this.rants.push(rant));
        this.loading = false;
      }
    );
  }

  getLines(rant) {
    let result = rant.text.split('\n');
    rant.lines = result;
    return result;
  }

  loadComments(rant) {
    console.debug("Loading comments for " + rant.id);
    rant.loadingComments = true;
    this.devRant.getComments(rant.id).subscribe(
      comments => {
        rant.comments = comments;
        rant.loadingComments = false;
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let bottomSpace = document.body.scrollHeight - window.innerHeight - window.scrollY;
    if(bottomSpace < 2000 && !this.loading) {
      this.getMoreRants();
    }
  }

  escape(text:String):String {
    return JSON.stringify(text).split('\\n').join('" + \n "');
  }
}
