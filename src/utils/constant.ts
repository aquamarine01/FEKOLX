import { Dimensions } from 'react-native';

export const RESOURCE_NAME = {
  CARTS: 'carts',
  PRODUCTS: 'products',
  USERS: 'users',
} as const;

export const COLOR_SCHEME = {
  DARK_BLUE: '#1171B7',
  LIGHT_BLUE: '#94CDF5',
  WHITE_LIGHT: 'white',
  BLACK_PITCH: '#000000',
};

export const CATEGORY = {
  ELECTRONICS: 'electronics',
  JEWELERY: 'jewelery',
  MEN_CLOTHING: "men's clothing",
  WOMEN_CLOTHING: "women's clothing",
};

export const CATEGORY_ICON = {
  ELECTRONICS: 'desktop-sharp',
  JEWELERY: 'diamond', // FA
  MEN_CLOTHING: 'shirt-outline',
  WOMEN_CLOTHING: 'shopping-bag', // FA
};

export const DEFAULT_PRODUCT = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin magna vel eros sollicitudin ultrices. Aenean iaculis auctor erat, eu scelerisque sem sodales nec. Suspendisse id auctor augue, quis pretium ante. Maecenas quis posuere felis. Suspendisse interdum egestas magna vel lacinia. Praesent eget ex diam. Sed commodo auctor dui, sit amet scelerisque diam.

Cras et arcu metus. Duis dignissim libero et enim egestas, non tincidunt dolor mollis. Quisque rutrum turpis quis justo porttitor, vel semper justo porta. Curabitur vitae augue nec leo semper ullamcorper non eu eros. Vestibulum hendrerit fermentum massa ac fermentum. Nam ante lectus, blandit at sem ac, laoreet ultricies urna. Suspendisse potenti. In fermentum purus neque. Donec condimentum dui eu justo condimentum, tincidunt ullamcorper magna placerat. Etiam faucibus, mi at pellentesque posuere, dolor leo porttitor nisl, sit amet gravida lectus urna ac odio.

Vivamus interdum augue leo, sed vestibulum felis condimentum nec. Nam vel arcu quis lorem fringilla lacinia. Sed ipsum justo, dictum non diam ac, finibus iaculis risus. Aenean est nisl, venenatis eget quam condimentum, dapibus vehicula risus. Suspendisse consectetur pretium tempor. Curabitur sit amet urna eleifend, faucibus dui id, gravida ligula. Pellentesque luctus tellus et justo semper porttitor. Cras auctor, velit ac venenatis lobortis, urna justo maximus sem, auctor placerat arcu enim sodales ante. Integer elementum vestibulum libero condimentum finibus. Sed risus risus, tristique vel sapien at, volutpat vestibulum ante. Duis dui risus, sodales non mi nec, sagittis ullamcorper est.

Vestibulum sit amet placerat dolor. Vestibulum urna nibh, vulputate ut nunc vitae, rhoncus dignissim risus. Nulla convallis nulla sed interdum mattis. Phasellus in odio egestas est dapibus semper. Aliquam nec malesuada ligula, eu aliquam dolor. Donec eget efficitur ipsum. Phasellus dignissim, urna et porttitor iaculis, magna quam malesuada orci, vel maximus purus ligula fringilla nisi. Nam vehicula euismod nulla et pellentesque. Nunc condimentum aliquet eros, vel viverra erat pharetra vel.

Pellentesque vestibulum rhoncus massa, vel mattis mauris ullamcorper nec. Fusce at placerat turpis. Maecenas sit amet nunc non nisl rutrum facilisis. Pellentesque posuere vehicula erat eu viverra. Nullam et odio lectus. Vivamus facilisis justo eget cursus elementum. Nunc iaculis pretium mi id rutrum. Praesent condimentum tempor sagittis. Ut vehicula eros vel dui scelerisque, sed tempor arcu eleifend. In vehicula tortor felis, eget accumsan neque porta sed. Nullam efficitur diam at elementum rutrum. Nunc hendrerit lorem vel tristique mollis. Duis nec nunc vitae turpis tristique ornare nec vel odio. Donec nec mi ex. Donec sagittis lectus vel velit dictum, non egestas nisi maximus. Phasellus et neque id orci tristique tincidunt.`,
};

export const DIMENSION = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  PADDING_HORIZONTAL: 10,
};
