import { Routes } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { Contact } from './sections/contact/contact';
import { ServicesComponent } from './sections/services/services.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
