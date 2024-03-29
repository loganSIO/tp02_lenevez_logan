import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'form', component: FormComponent },
  { path: 'data-form', component: DataFormComponent }
];
