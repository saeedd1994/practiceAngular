import {Component} from '@angular/core';
import {NgbAlert, NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkButton, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgbNavItem,
    NgbNavLinkButton,
    NgbNav,
    NgbNavContent,
    NgbNavOutlet,
    NgbAlert
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  active = 1;
}
