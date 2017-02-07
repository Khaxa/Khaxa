import { Component } from '@angular/core';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'khaxa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items: FirebaseListObservable<any[]>;
  title = '';

  // constructor(fireDB: AngularFire) {
  constructor() {
    // this.items = fireDB.database.list('/items');
    this.title = 'Khaxa!';

    // this.items.subscribe(item => console.log("item!", item));
  }
}
