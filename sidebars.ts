import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    "welcome",
    "why-quartz",
    "how-it-works",
    "integration",
    "security",
    {
      type: "category",
      label: "Community",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "link",
          label: "X / Twitter",
          href: "https://x.com/quartzpay"
        },
        {
          type: "link",
          label: "Discord",
          href: "https://discord.gg/K3byNmnKNm"
        },
        {
          type: "link",
          label: "Website",
          href: "https://quartzpay.io/"
        }
      ]
    },
    {
      type: 'category',
      label: 'Legal',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'Legal/risks',
        "Legal/terms-and-conditions",
        "Legal/privacy-policy"
      ],
    },
  ]
};

export default sidebars;
