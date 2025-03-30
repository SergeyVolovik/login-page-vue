import { createPinia } from 'pinia';

import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import FloatLabel from 'primevue/floatlabel';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Password from 'primevue/password';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import ToastService from 'primevue/toastservice';

import router from '@/router';

const PRIMEVUE_COMPONENTS = [
  { name: 'Button', component: Button },
  { name: 'Password', component: Password },
  { name: 'InputText', component: InputText },
  { name: 'Skeleton', component: Skeleton },
  { name: 'InputGroup', component: InputGroup },
  { name: 'FloatLabel', component: FloatLabel },
  { name: 'Message', component: Message },
  { name: 'ProgressSpinner', component: ProgressSpinner },
  { name: 'Card', component: Card },
  { name: 'Rating', component: Rating },
  { name: 'Tag', component: Tag }
];

// const CUSTOM_COMPONENTS = [{ name: 'Placeholder', component: Placeholder }];

export const registerPrimeVue = (app: any) => {
  PRIMEVUE_COMPONENTS.forEach(({ name, component }) => app.component(name, component));
};

// export const registerCustomComponents = (app: any) => {
//   CUSTOM_COMPONENTS.forEach(({ name, component }) => app.component(name, component));
// };

export const registerPlugins = (app: any) => {
  app
    .use(PrimeVue, {
      theme: {
        preset: Aura
      }
    })
    .use(ToastService)
    .use(router)
    .use(createPinia());

  registerPrimeVue(app);
};
