/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  manufacturingSidebar: [
    {
      type: "category",
      label: "製造業",
      items: ["manufacturing/manufacturing/ai-and-ml-in-manufacturing"],
      collapsed: false,
    },
    {
      type: "category",
      label: "品質管理",
      items: [
        "manufacturing/quality-control/qc-overview",
        "manufacturing/quality-control/qc-diagnostic",
        "manufacturing/quality-control/qc-demonstration",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "設備保全",
      items: [
        "manufacturing/equipment-maintenance/em-overview",
        "manufacturing/equipment-maintenance/em-predictive-maintenance",
        "manufacturing/equipment-maintenance/em-demonstration",
      ],
      collapsed: false,
    },
  ],
  otherSidebar: ["other/session-30th-March-2023"],
};

module.exports = sidebars;
