import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
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
import { ColoreditComponent } from './pages/colors/coloredit/coloredit.component';
import { ColorcreateComponent } from './pages/colors/colorcreate/colorcreate.component';
import { RulelistComponent } from './pages/rules/rulelist/rulelist.component';
import { RuleeditComponent } from './pages/rules/ruleedit/ruleedit.component';
import { RulecreateComponent } from './pages/rules/rulecreate/rulecreate.component';
import { ValuelogolistComponent } from './pages/valuelogo/valuelogolist/valuelogolist.component';
import { ValuelogoeditComponent } from './pages/valuelogo/valuelogoedit/valuelogoedit.component';
import { ValuelogocreateComponent } from './pages/valuelogo/valuelogocreate/valuelogocreate.component';
import { GarmentcolorlistComponent } from './pages/garmentcolors/garmentcolorlist/garmentcolorlist.component';
import { GarmentcoloreditComponent } from './pages/garmentcolors/garmentcoloredit/garmentcoloredit.component';
import { GarmentcolorcreateComponent } from './pages/garmentcolors/garmentcolorcreate/garmentcolorcreate.component';
import { PetlistComponent } from './pages/pets/petlist/petlist.component';
import { PeteditComponent } from './pages/pets/petedit/petedit.component';
import { PetcreateComponent } from './pages/pets/petcreate/petcreate.component';
import { FontlistComponent } from './pages/fonts/fontlist/fontlist.component';
import { FonteditComponent } from './pages/fonts/fontedit/fontedit.component';
import { FontcreateComponent } from './pages/fonts/fontcreate/fontcreate.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },

      // *****ARTS******

      // --> List
      {path: 'art/list', component: ArtslistComponent},
      // --> edit
      {path: 'art/edit', component: ArtseditComponent},
      // --> create
      {path: 'art/create', component: ArtscreateComponent},

      // *****Company******

      // --> List      
      {path: 'company/list', component: CompanylistComponent},
      // --> edit      
      {path: 'company/edit', component: CompanyeditComponent},
      // --> create      
      {path: 'company/create', component: CompanycreateComponent},

      // *****Logoes******

      // --> List      
      {path: 'logoes/list', component: LogoeslistComponent},
      // --> edit      
      {path: 'logoes/edit', component: LogoeseditComponent},
      // --> create      
      {path: 'logoes/create', component: LogoescreateComponent},

      // *****Users******

      // --> List      
      {path: 'user/list', component: UserlistComponent},
      // --> edit      
      {path: 'user/edit', component: UsereditComponent},
      // --> create      
      {path: 'user/create', component: UsercreateComponent},

      // *****UserTypes******

      // --> List      
      {path: 'usertype/list', component: UsertypelistComponent},
      // --> edit      
      {path: 'usertype/edit', component: UsertypeeditComponent},
      // --> create      
      {path: 'usertype/create', component: UsertypecreateComponent},
      
      // *****Colors******
      
       // --> List      
       {path: 'color/list', component: ColorlistComponent},
       // --> edit      
       {path: 'color/edit', component: ColoreditComponent},
       // --> create      
       {path: 'color/create', component: ColorcreateComponent},

       // *****Rules******
      
       // --> List      
       {path: 'rule/list', component: RulelistComponent},
       // --> edit      
       {path: 'rule/edit', component: RuleeditComponent},
       // --> create      
       {path: 'rule/create', component: RulecreateComponent},

       // *****Values of loges******
      
       // --> List      
       {path: 'valueloge/list', component: ValuelogolistComponent},
       // --> edit      
       {path: 'valueloge/edit', component: ValuelogoeditComponent},
       // --> create      
       {path: 'valueloge/create', component: ValuelogocreateComponent},

       // *****Garment Colors******
      
       // --> List      
       {path: 'garmentcolor/list', component: GarmentcolorlistComponent},
       // --> edit      
       {path: 'garmentcolor/edit', component: GarmentcoloreditComponent},
       // --> create      
       {path: 'garmentcolor/create', component: GarmentcolorcreateComponent},

       // *****Pets******
      
       // --> List      
       {path: 'pet/list', component: PetlistComponent},
       // --> edit      
       {path: 'pet/edit', component: PeteditComponent},
       // --> create      
       {path: 'pet/create', component: PetcreateComponent},

       // *****Fonts******
      
       // --> List      
       {path: 'font/list', component: FontlistComponent},
       // --> edit      
       {path: 'font/edit', component: FonteditComponent},
       // --> create      
       {path: 'font/create', component: FontcreateComponent},
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
