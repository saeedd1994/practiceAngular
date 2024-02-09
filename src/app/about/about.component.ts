import {Component, OnInit} from '@angular/core';
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
export class AboutComponent implements OnInit {
  active = 1;
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  ngOnInit() {


    fetch(this.url)
      .then((res) => {
        return res.json()
      })
      .then((todos) => {
        console.log(todos)
      })
      .catch((err) => {
        console.log(err)
      })


  }


}
