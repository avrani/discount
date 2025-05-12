import { Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { MonitorComponent } from './monitor/monitor.component';
export const routes: Routes = [
    { path: '', component: DataComponent },
    { path: 'data', component: DataComponent },
    { path: 'analisis', component: AnalisisComponent },
    { path: 'monitor', component: MonitorComponent },
];
