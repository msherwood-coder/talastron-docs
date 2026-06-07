import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Change this to your GitHub Pages URL once enabled:
  // site: 'https://msherwood-coder.github.io',
  // base: '/Development',
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
          href: 'https://github.com/msherwood-coder/Development',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/images/og-card.png',
          },
        },
      ],
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
            {
              label: 'How It Works',
              items: [
                { label: 'Overview', slug: 'concepts/how-it-works' },
                { label: 'System Architecture', slug: 'concepts/architecture' },
                { label: 'Agent Architecture', slug: 'concepts/agents' },
                { label: 'Skills & Instructions', slug: 'concepts/skills' },
                { label: 'Workflow Engine', slug: 'concepts/workflow-engine' },
                { label: 'MCP Integration', slug: 'concepts/mcp-integration' },
              ],
            },
            {
              label: 'Workflow',
              items: [
                { label: 'Overview', slug: 'concepts/workflow' },
                { label: 'Step 1 — Requirements', slug: 'concepts/workflow/step-1' },
                { label: 'Step 2 — Architecture', slug: 'concepts/workflow/step-2' },
                { label: 'Step 3 — Design', slug: 'concepts/workflow/step-3' },
                { label: 'Step 3.5 — Governance', slug: 'concepts/workflow/step-3-5' },
                { label: 'Step 4 — IaC Plan', slug: 'concepts/workflow/step-4' },
                { label: 'Step 5 — IaC Code', slug: 'concepts/workflow/step-5' },
                { label: 'Step 6 — Deploy', slug: 'concepts/workflow/step-6' },
                { label: 'Step 7 — As-Built', slug: 'concepts/workflow/step-7' },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'APEX Concepts', slug: 'reference/apex-concepts' },
            { label: 'Agents', slug: 'reference/agents' },
            { label: 'Skills Catalog', slug: 'reference/skills' },
            { label: 'Glossary', slug: 'reference/glossary' },
          ],
        },
        {
          label: 'Products',
          items: [
            { label: 'Talastron Kinetic AI', slug: 'products/talastron' },
            { label: 'Orion Data Analytics', slug: 'products/orion' },
            { label: 'Polygon Systems', slug: 'products/polygon' },
          ],
        },
      ],
    }),
  ],
});
