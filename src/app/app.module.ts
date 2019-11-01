import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SurveyService } from './survey/survey.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [
    SurveyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
