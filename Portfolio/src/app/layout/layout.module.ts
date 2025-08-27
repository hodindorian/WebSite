import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    TranslatePipe,
  ],
  providers: [],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
