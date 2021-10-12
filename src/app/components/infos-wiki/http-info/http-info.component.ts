import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WikiService } from 'src/app/service/wiki.service';


@Component({
  selector: 'app-http-info',
  templateUrl: './http-info.component.html',
  styleUrls: ['./http-info.component.scss']
})
export class HttpInfoComponent implements OnInit {

  foiClickado: boolean = false;

  clickEventSubscription:Subscription;

  constructor(private wikiService:WikiService) {
    this.clickEventSubscription = this.wikiService.getClick().subscribe(()=>{
      this.toggleClass();
    })
  
   }

   toggleClass(){
     this.foiClickado = !this.foiClickado;
  
   }

  ngOnInit(): void {

  }

}
