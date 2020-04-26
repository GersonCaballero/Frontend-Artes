import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

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
import { ColorlistComponent } from './pages/colors/colorlist/colorlist.component';
import { ColorcreateComponent } from './pages/colors/colorcreate/colorcreate.component';
import { ColoreditComponent } from './pages/colors/coloredit/coloredit.component';
import { FontlistComponent } from './pages/fonts/fontlist/fontlist.component';
import { FontcreateComponent } from './pages/fonts/fontcreate/fontcreate.component';
import { FonteditComponent } from './pages/fonts/fontedit/fontedit.component';
import { GarmentcolorlistComponent } from './pages/garmentcolors/garmentcolorlist/garmentcolorlist.component';
import { GarmentcolorcreateComponent } from './pages/garmentcolors/garmentcolorcreate/garmentcolorcreate.component';
import { GarmentcoloreditComponent } from './pages/garmentcolors/garmentcoloredit/garmentcoloredit.component';
import { PetlistComponent } from './pages/pets/petlist/petlist.component';
import { PetcreateComponent } from './pages/pets/petcreate/petcreate.component';
import { PeteditComponent } from './pages/pets/petedit/petedit.component';
import { RulelistComponent } from './pages/rules/rulelist/rulelist.component';
import { RulecreateComponent } from './pages/rules/rulecreate/rulecreate.component';
import { RuleeditComponent } from './pages/rules/ruleedit/ruleedit.component';
import { ValuelogolistComponent } from './pages/valuelogo/valuelogolist/valuelogolist.component';
import { ValuelogocreateComponent } from './pages/valuelogo/valuelogocreate/valuelogocreate.component';
import { ValuelogoeditComponent } from './pages/valuelogo/valuelogoedit/valuelogoedit.component';


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
    UsertypecreateComponent,
    ColorlistComponent,
    ColorcreateComponent,
    ColoreditComponent,
    FontlistComponent,
    FontcreateComponent,
    FonteditComponent,
    GarmentcolorlistComponent,
    GarmentcolorcreateComponent,
    GarmentcoloreditComponent,
    PetlistComponent,
    PetcreateComponent,
    PeteditComponent,
    RulelistComponent,
    RulecreateComponent,
    RuleeditComponent,
    ValuelogolistComponent,
    ValuelogocreateComponent,
    ValuelogoeditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
