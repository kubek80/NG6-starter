
import cart from './svg/shopping-cart.svg';

const images = {
  cart
}

const svgFilter = $sce => imgName => $sce.trustAsHtml(images[imgName]);
svgFilter.$inject = ['$sce'];

export default svgFilter;
