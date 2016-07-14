import {Component, OnInit} from '@angular/core';
import {DevRantService} from "../dev-rant.service";

@Component({
  moduleId: module.id,
  selector: 'app-json-feed',
  templateUrl: 'json-feed.component.html',
  styleUrls: ['json-feed.component.css']
})
export class JsonFeedComponent implements OnInit {
  private rants:any[] = [];

  constructor(private devRant:DevRantService) {
  }

  ngOnInit() {
    this.devRant.getRants().subscribe(
      rants => this.rants = rants
    );
  }

  getLines(rant) {
    let result = rant.text.split("\n").map(line => JSON.stringify(line));
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
    return JSON.stringify(text).split("\\n").join('" + \n "');
  }
}
