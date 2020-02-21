import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ArtscreateComponent } from './pages/Arts/artscreate/artscreate.component';
import { ArtseditComponent } from './pages/Arts/artsedit/artsedit.component';
import { ArtslistComponent } from './pages/Arts/artslist/artslist.component';
import { CompanylistComponent } from './pages/Companys/companylist/companylist.component';
import { CompanyeditComponent } from './pages/Companys/companyedit/companyedit.component';
import { CompanycreateComponent } from './pages/Companys/companycreate/companycreate.component';
import { LogoeslistComponent } from './pages/Logoes/logoeslist/logoeslist.component';
import { LogoeseditComponent } from './pages/Logoes/logoesedit/logoesedit.component';
import { LogoescreateComponent } from './pages/Logoes/logoescreate/logoescreate.component';
import { UserlistComponent } from './pages/Users/userlist/userlist.component';
import { UsereditComponent } from './pages/Users/useredit/useredit.component';
import { UsercreateComponent } from './pages/Users/usercreate/usercreate.component';
import { UsertypelistComponent } from './pages/UserTypes/usertypelist/usertypelist.component';
import { UsertypeeditComponent } from './pages/UserTypes/usertypeedit/usertypeedit.component';
import { UsertypecreateComponent } from './pages/UserTypes/usertypecreate/usertypecreate.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ArtslistComponent,
    ArtscreateComponent,
    ArtseditComponent,
    CompanylistComponent,
    CompanyeditComponent,
    CompanycreateComponent,
    LogoeslistComponent,
    LogoeseditComponent,
    LogoescreateComponent,
    UserlistComponent,
    UsereditComponent,
    UsercreateComponent,
    UsertypelistComponent,
    UsertypeeditComponent,
    UsertypecreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
