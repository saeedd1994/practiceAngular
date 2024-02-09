import {Component, OnInit} from '@angular/core';
import {NgbAlert, NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkButton, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {async, map, Observable, shareReplay} from "rxjs";
import {ITodo} from "../interface/itodo";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgbNavItem,
    NgbNavLinkButton,
    NgbNav,
    NgbNavContent,
    NgbNavOutlet,
    NgbAlert,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  active = 1;
  url: string = 'https://jsonplaceholder.typicode.com/todos';
  http$?: Observable<ITodo[]>;
  doneTasks$ ?: Observable<ITodo[]>;
  unDoneTasks$ ?: Observable<ITodo[]>;

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

    // for fetch just once
    this.http$ = this.http$.pipe(shareReplay());

    this.doneTasks$ = this.http$.pipe(map((todo) => todo.filter((task) => task.completed)));
    this.unDoneTasks$ = this.http$.pipe(map((todo) => todo.filter((task) => !task.completed)));

  }



}
