import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('../services/services.page').then((m) => m.ServicesPage),
      },
      {
        path: 'ai-assistant',
        loadComponent: () =>
          import('../ai-assistant/ai-assistant.page').then((m) => m.AiAssistantPage),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../contact/contact.page').then((m) => m.ContactPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
