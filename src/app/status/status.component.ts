import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
    cookie = navigator.cookieEnabled;
    useragent = navigator.userAgent;
    lan= navigator.languages;
    maxt = navigator.maxTouchPoints;
    lo = navigator.hardwareConcurrency;
    time = Date();

}
