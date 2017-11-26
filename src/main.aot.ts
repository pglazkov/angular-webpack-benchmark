
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot_temp/src/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  