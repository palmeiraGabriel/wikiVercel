import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text: string[] = '「 緑 」 wiki.midori.dev'.split(' ');
  logo: string = '';

  constructor() {
  }

  writeText(): void {
    this.logo = this.text.reduce(this.addTags);
  }

  addTags(prevText: string, curText: string): string {
      if (prevText == '「' || prevText == '」') return '<b class="alt">' + prevText + '</b>' + curText;
      if (curText == '「' || curText == '」') return prevText + '<b class="alt">' + curText + '</b>';
      return prevText + curText;
    }

  ngOnInit(): void {
    this.writeText();
  }
}
