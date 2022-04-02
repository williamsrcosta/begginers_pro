
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { provideFirestore, getFirestore } from '@angular/fire/compat/';
import { AngularFireStorageModule } from "@angular/fire/compat/storage";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Requisições HttpClient
import { HttpClientModule } from '@angular/common/http';

// material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IgrejasComponent } from './igrejas/igrejas.component';
import { NovaIgrejaComponent } from './nova-igreja/nova-igreja.component';
import { IgrejaComponent } from './igreja/igreja.component';
import { FiltroIgrejaPipe } from './shared/filtro-igreja.pipe';
import { LoginPageComponent } from './login-page/login-page.component';

//Tradução
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// registerLocaleData(localeBr, 'pt')


@NgModule({
  declarations: [
    AppComponent,
    IgrejasComponent,
    NovaIgrejaComponent,
    IgrejaComponent,
    FiltroIgrejaPipe,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Firebase
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),

    //Forms
    ReactiveFormsModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase)
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
