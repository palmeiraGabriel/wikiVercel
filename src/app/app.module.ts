import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { JakartaServletComponent } from './components/pages/jakarta-servlet/jakarta-servlet.component';
import { ComputerProgrammingComponent } from './components/pages/computer-programming/computer-programming.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JavascriptComponent } from './components/pages/javascript/javascript.component';
import { TypescriptComponent } from './components/pages/typescript/typescript.component';
import { JavaComponent } from './components/pages/java/java.component';
import { ProgrammingLanguageComponent } from './components/pages/programming-language/programming-language.component';
import { MavenComponent } from './components/pages/maven/maven.component';
import { InfoContainerComponent } from './components/infos-wiki/info-container/info-container.component';
import { HttpInfoComponent } from './components/infos-wiki/http-info/http-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    JakartaServletComponent,
    ComputerProgrammingComponent,
    HomeComponent,
    JavascriptComponent,
    TypescriptComponent,
    JavaComponent,
    ProgrammingLanguageComponent,
    MavenComponent,
    InfoContainerComponent,
    HttpInfoComponent
    
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
