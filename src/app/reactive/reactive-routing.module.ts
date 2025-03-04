import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { DinamycComponent } from './pages/dinamyc/dinamyc.component';
import { SwitchesComponent } from './pages/switches/switches.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'basic', component: BasicComponent },
      { path: 'dinamyc', component:DinamycComponent },
      { path:'switches', component:SwitchesComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
