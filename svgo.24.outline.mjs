export default {
  plugins: [
    'removeDimensions',
    // 'sortAttrs',
    // 'cleanupListOfValues',
    // Drop the redundant full-viewBox clip-path before preset-default runs, so its
    // removeUselessDefs then strips the now-orphaned <clipPath>/<defs>. The clip
    // covers the whole 24x24 viewBox (a no-op), but cleanupIds minifies every
    // icon's clip id to "a"; duplicate ids on one page make WebKit (iOS) clip all
    // but the first icon away. Removing the clip eliminates the collision at source.
    {
      name: 'removeAttrs',
      params: {
        attrs: ['clip-path'],
      },
    },
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
