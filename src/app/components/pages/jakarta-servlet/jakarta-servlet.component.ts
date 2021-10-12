import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/service/wiki.service';

@Component({
  selector: 'app-jakarta-servlet',
  templateUrl: './jakarta-servlet.component.html',
  styleUrls: ['./jakarta-servlet.component.scss']
})
export class JakartaServletComponent implements OnInit {



  constructor(private wikiService:WikiService) { 

  }

  mostrarInfo(){
    this.wikiService.sendClick();
  }


  ngOnInit(): void {
 
  }

}
