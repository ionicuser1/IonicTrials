import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DragulaModule } from 'ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';
import { ContextMenuModule } from 'ngx-contextmenu';
import { NouisliderModule } from 'ng2-nouislider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TagInputModule } from 'ngx-chips';
// import { FormWizardModule } from 'angular2-wizard';
// import { NgxSummernoteModule } from 'ngx-summernote';
// import { TinymceModule } from 'angular2-tinymce';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodemirrorModule } from 'ng2-codemirror';
import { ChartsModule } from 'ng2-charts';
// import { Select2Module } from 'ng2-select2';
import { MorrisJsModule } from 'angular-morris-js';
import { ChartistModule } from 'ng-chartist';
// import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
// import { AgmCoreModule } from '@agm/core';
import { BarRatingModule } from "ngx-bar-rating";
// import { FullCalendarModule } from 'ng-fullcalendar';
// import { ScrollToModule } from 'ng2-scroll-to-el';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    NgbModule,
    // DragulaModule.forRoot(),
    ClipboardModule,
    ContextMenuModule.forRoot(),
    NouisliderModule,
    CarouselModule,
    DropzoneModule,
    ColorPickerModule,
    AngularDateTimePickerModule,
    AmazingTimePickerModule,
    TagInputModule,
    // FormWizardModule,
    // NgxSummernoteModule,
    // TinymceModule.withConfig({}),
    AceEditorModule,
    CodemirrorModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    // Select2Module,
    MorrisJsModule,
    ChartistModule,
    // DataTablesModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyCnT63XUjqjPgXZ0lFTU_pdpfUX7swzTTM' }),
    BarRatingModule,
    // FullCalendarModule,
    // ScrollToModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
