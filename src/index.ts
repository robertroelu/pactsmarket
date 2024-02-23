//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { preloader } from '$utils/preloader';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // modal();
  linkblockedit();
  swipers();
  preloader();
});
