import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { DiagnosisResultComponent } from './diagnosis-result/diagnosis-result.component';

const routes: Routes = [
  { path: 'result', component: DiagnosisResultComponent },
  { path: '**', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
