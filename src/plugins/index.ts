import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Skeleton from 'primevue/skeleton';
import InputGroup from 'primevue/inputgroup';
import FloatLabel from 'primevue/floatlabel';
import Message from 'primevue/message';
import ProgressSpinner from 'primevue/progressspinner';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

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
