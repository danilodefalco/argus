import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceInLeft } from 'ng-animate';
import {MailService} from '@sendgrid/mail';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceInLeft))])
  ],
})
export class HomeComponent implements OnInit {
  bounce: any;
  constructor() { }

  ngOnInit(): void {
  }

}
