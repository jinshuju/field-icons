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
          // Rewrite the design tool's hardcoded black into currentColor, on whichever
          // attribute each icon actually paints with. Most ship as real strokes and get
          // stroke="currentColor"; gender/qq ship as expanded outlines and get
          // fill="currentColor". Leaving the choice to the source keeps both kinds
          // colorable without a per-icon exception here.
          convertColors: { currentColor: true },
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        // Only the root's colors, which the design tool sets to fill="none" wholesale.
        // Per-path colors are load-bearing after the rewrite above, so leave them.
        attrs: ['svg:fill', 'svg:stroke'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            // 'stroke-width': '1.5',
            // No stroke here: it would paint an extra default-width outline around the
            // fill-drawn icons. Each path already carries its own paint attribute.
            fill: 'none',
            // 'aria-hidden': 'true',
            'data-slot': 'icon',
          },
        ],
      },
    },
  ],
}
