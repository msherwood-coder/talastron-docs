import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://msherwood-coder.github.io',
  base: '/talastron-docs',
  integrations: [
    starlight({
      title: 'Talastron',
      description: 'Azure-native Agentic Software Factory — Orion Data Analytics',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/msherwood-coder/talastron-docs',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Azure Setup', slug: 'getting-started/azure-setup' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'How It Works', slug: 'concepts/how-it-works' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'APEX Concepts', slug: 'reference/apex-concepts' },
          ],
        },
        {
          label: 'Demo',
          items: [
            { label: 'Live Demo Guide', slug: 'demo' },
          ],
        },
      ],
    }),
  ],
});