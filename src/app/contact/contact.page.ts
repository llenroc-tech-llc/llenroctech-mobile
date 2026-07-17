import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, globeOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
export class ContactPage {
  constructor() {
    addIcons({ arrowForwardOutline, globeOutline, mailOutline });
  }
}
