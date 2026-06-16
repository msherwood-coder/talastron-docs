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
        replacesTitle: true,
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
            { label: 'Overview', slug: 'demo' },
            { label: 'Pre-Demo Smoke Tests', slug: 'demo/smoke-tests' },
            { label: 'Demonstration Script', slug: 'demo/script' },
            { label: 'Troubleshooting', slug: 'demo/troubleshooting' },
            { label: 'Post-Demo Housekeeping', slug: 'demo/housekeeping' },
            { label: 'Appendix A — Quick Reference', slug: 'demo/appendix-a' },
            { label: 'Appendix B — Chat Scripts', slug: 'demo/appendix-b' },
          ],
        },
      ],
    }),
  ],
});