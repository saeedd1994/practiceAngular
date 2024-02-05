import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

    const interval$ = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      // observer.error(new Error('error in app!'))
      observer.complete
    });

    interval$.subscribe(
      (value: number)=>{
        console.log(value)
      }
    );
  }

}
