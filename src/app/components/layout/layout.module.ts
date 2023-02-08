import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { NgxBootstrapIconsModule, cart4 } from 'ngx-bootstrap-icons';

const bootstrapIcons = {
  cart4,
};
@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(bootstrapIcons),
  ],
  exports: [HeaderComponent],
})
export class LayoutModule {}
