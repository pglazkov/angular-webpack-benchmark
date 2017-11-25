
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../../../aot_temp/src/apps/airplane/app.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    