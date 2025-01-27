import { builder, Builder } from '@builder.io/react';
import { AntButton, AntCard, AntModal } from '../components/AntComponents';

const PUBLIC_API_KEY_BUILDER = import.meta.env.VITE_BUILDER_PUBLIC_API_KEY;

if (!PUBLIC_API_KEY_BUILDER) {
    throw new Error("La clave de API pública de Builder.io no está configurada");
  }
  
builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

Builder.registerComponent(AntButton, {
    name: 'AntButton',
    inputs: [
      { name: 'text', type: 'string', defaultValue: 'Click Me' },
      { name: 'type', type: 'string', enum: ['default', 'primary', 'ghost'], defaultValue: 'default' },
      { name: 'onClick', type: 'event', helperText: 'Action triggered on click' },
    ],
  });
  
  Builder.registerComponent(AntCard, {
    name: 'AntCard',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Card Title' },
      { name: 'content', type: 'string', defaultValue: 'This is a card.' },
    ],
  });
  
  Builder.registerComponent(AntModal, {
    name: 'AntModal',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Modal Title' },
      { name: 'visible', type: 'boolean', defaultValue: true },
      { name: 'onClose', type: 'event', helperText: 'Close the modal' },
    ],
  });