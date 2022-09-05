import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*componentes agregados*/
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { RedesComponent } from './redes/redes.component';
/*componentes modales*/
import { LoginComponent } from './modals/login/login.component'; 
import { ButtonEliminarComponent } from './modals/button-eliminar/button-eliminar.component';
import { ImagenPerfilComponent } from './modals/imagen-perfil/imagen-perfil.component';
import { SobreMiComponent } from './modals/sobre-mi/sobre-mi.component';
import { MisDatosComponent } from './modals/mis-datos/mis-datos.component';
import { EducationComponent } from './modals/education/education.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { SkillsComponent } from './modals/skills/skills.component';
import { ProyectComponent } from './modals/proyect/proyect.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    /*componentes*/
    NavbarComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    RedesComponent,
    /*modals*/
    LoginComponent,
    ButtonEliminarComponent,
    ImagenPerfilComponent,
    SobreMiComponent,
    MisDatosComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  