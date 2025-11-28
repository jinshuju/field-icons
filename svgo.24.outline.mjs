export default {
  plugins: [
    'removeDimensions',
    // 'sortAttrs',
    // 'cleanupListOfValues',
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertShapeToPath: false,
          mergePaths: false,
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'path:fill'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            // 'stroke-width': '1.5',
            fill: 'currentColor',
            // 'aria-hidden': 'true',
            'data-slot': 'icon',
          },
        ],
      },
    },
  ],
}
