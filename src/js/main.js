import polyfills from './polyfills';
import SliderInit from './modules/silder-init';
import 'fslightbox';
import ScrollTo from './modules/scroll-to';
import HeaderToggler from './modules/header-toggler';

{
  polyfills();
  SliderInit();
  ScrollTo();
  HeaderToggler();
}
