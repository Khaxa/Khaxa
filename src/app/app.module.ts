import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { LinkComponent } from './link/link.component';
import { LinkListComponent } from './link-list/link-list.component';

// //  TODO: implement config retriever and injector before bootstrap to provide this info!
// export const firebaseConfig = {
//   apiKey: '<your-key>',
//   authDomain: '<your-project-authdomain>',
//   databaseURL: '<your-database-URL>',
//   storageBucket: '<your-storage-bucket>',
//   messagingSenderId: '<your-messaging-sender-id>'
// };

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    LinkListComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig, null, 'khaxa'),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
