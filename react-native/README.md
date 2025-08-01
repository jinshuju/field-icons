## Basic Usage

First, install `@jinshuju/field-icons-react-native` from npm:

```sh
npm install @jinshuju/field-icons-react-native
```

Now each icon can be imported individually as a React component:

```js
import { FieldIconTextField } from '@jinshuju/field-icons-react-native/24/solid'

function MyComponent() {
  return (
    <div>
      <FieldIconTextField className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@jinshuju/field-icons-react-native/24/outline`, the 24x24 solid icons can be imported from `@jinshuju/field-icons-react-native/24/solid`, the 20x20 solid icons can be imported from `@jinshuju/field-icons-react-native/20/solid`, and 16x16 solid icons can be imported from `@jinshuju/field-icons-react-native/16/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@jinshuju/field-icons-react-native/24/outline/)

## Contributing

While we absolutely appreciate anyone's willingness to try and improve the project, we're currently only interested in contributions that fix bugs, for example things like incorrect TypeScript types, or fixing an icon that's been exported with a fill instead of a stroke, etc.

**We're not accepting contributions for new icons or adding support for other frameworks like Svelte or SolidJS**. Instead we encourage you to release your own icons in your own library, and create your own packages for any other frameworks you'd like to see supported.

## License

This library is MIT licensed.
