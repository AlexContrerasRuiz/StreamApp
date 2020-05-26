import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

import { VgCoreModule } from 'videogular2/compiled/core'
import { VgControlsModule } from 'videogular2/compiled/controls';




@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, VgCoreModule, VgControlsModule ],
  exports: [TranslateModule, WebviewDirective, FormsModule, VgCoreModule, VgControlsModule  ]
})
export class SharedModule { }
