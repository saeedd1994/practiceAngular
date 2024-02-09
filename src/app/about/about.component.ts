import {Component, OnInit} from '@angular/core';
import {NgbAlert, NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkButton, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";
import {ITodo} from "../interface/itodo";

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
  http$?: Observable<ITodo[]>

  ngOnInit() {

    this.http$ = new Observable<ITodo[]>((observer) => {


      fetch(this.url)
        .then((res) => {
          return res.json()
        })
        .then((todos) => {
          observer.next(todos);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err)
        })


    })

  }




}
