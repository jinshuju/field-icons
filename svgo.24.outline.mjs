export default {
  plugins: [
    // 'preset-default',
    'removeDimensions',
    // 'sortAttrs',
    // 'cleanupListOfValues',
    // {
    //   name: 'removeAttrs',
    //   params: {
    //     attrs: ['stroke', 'path:stroke-width'],
    //   },
    // },
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
