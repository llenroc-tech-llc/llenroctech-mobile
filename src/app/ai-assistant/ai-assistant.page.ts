import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, sparklesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ai-assistant',
  templateUrl: 'ai-assistant.page.html',
  styleUrls: ['ai-assistant.page.scss'],
  imports: [IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
export class AiAssistantPage {
  constructor() {
    addIcons({ lockClosedOutline, sparklesOutline });
  }
}
