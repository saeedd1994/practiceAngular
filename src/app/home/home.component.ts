import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {


  subscription?: Subscription;
  ngOnInit(): void {

    const interval$ = interval(1000)

    this.subscription = interval$.subscribe(
      (value: number) => {
        console.log(value)
      },
      (err) => {
        console.log('err', err)
      },
      ()=>{
        console.log('completed')
      }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
