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
