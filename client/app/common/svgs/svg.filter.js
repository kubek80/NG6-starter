import avocado from './svg/avocado.svg';
import chocolate from './svg/chocolate-strawberry.svg';
import coffee from './svg/frosted-coffee.svg';
import apple from './svg/green-apple.svg';
import kiwi from './svg/kiwi-banana.svg';
import mango from './svg/mango-banana.svg';
import melon from './svg/melon-mint.svg';
import orange from './svg/orange-carrot.svg';
import rapsberry from './svg/rapsberry-banana.svg';
import strawberry from './svg/strawberry.svg';
import vanilla from './svg/vanilla.svg';
import watermelon from './svg/watermelon.svg';
import cart from './svg/shopping-cart.svg';

const images = {
  avocado,
  chocolate,
  coffee,
  apple,
  kiwi,
  mango,
  melon,
  orange,
  rapsberry,
  strawberry,
  vanilla,
  watermelon,
  cart
}

const svgFilter = $sce => imgName => $sce.trustAsHtml(images[imgName]);
svgFilter.$inject = ['$sce'];

export default svgFilter;
