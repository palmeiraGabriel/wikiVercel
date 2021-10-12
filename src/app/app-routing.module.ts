import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ComputerProgrammingComponent } from './components/pages/computer-programming/computer-programming.component';
import { JakartaServletComponent } from './components/pages/jakarta-servlet/jakarta-servlet.component';
import { JavascriptComponent } from './components/pages/javascript/javascript.component';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { JavaComponent } from './components/pages/java/java.component';
import { MavenComponent } from './components/pages/maven/maven.component';


const routes: Routes = [
  { path: ''                    , component: HomeComponent },
  { path: 'computer-programming', component: ComputerProgrammingComponent },
  { path: 'javascript'          , component: JavascriptComponent },
  { path: 'typescript'          , component: TypescriptComponent },
  { path: 'java'                , component: JavaComponent },
  { path: 'jakarta-servlet'     , component: JakartaServletComponent },
  { path: 'maven'               , component: MavenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
