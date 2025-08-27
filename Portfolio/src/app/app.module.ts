import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {PersoComponent} from './perso/perso.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app.routing';
import {NgOptimizedImage} from '@angular/common';
export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

@NgModule({
  imports: [
    TranslatePipe,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      fallbackLang: 'fr'
    }),
    AppRoutingModule,
    NgOptimizedImage
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    PersoComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: './assets/i18n/',
        suffix: '.json'
      }
    },

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
