import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { ViewquestionComponent } from './viewquestion/viewquestion.component';
import { DeletequestionComponent } from './deletequestion/deletequestion.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

var ram : Routes = [
{
  path:'viewquestion',
  component:ViewquestionComponent
},
{
  path:'createquestion',
  component:CreatequestionComponent
},
{
  path:'updatequestion',
  component:UpdatequestionComponent
},
{
  path:'deletequestion',
  component:DeletequestionComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    CreatequestionComponent,
    ViewquestionComponent,
    DeletequestionComponent,
    UpdatequestionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ram),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
