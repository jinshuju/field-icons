## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need and inline it directly into your HTML:

```html
<svg
  class="size-6 text-gray-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>
```

## React

First, install `@jinshuju/field-icons-react` from npm:

```sh
npm install @jinshuju/field-icons-react
```

Now each icon can be imported individually as a React component:

```js
import { FieldIconTextField } from '@jinshuju/field-icons-react/24/solid'

function MyComponent() {
  return (
    <div>
      <FieldIconTextField className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@jinshuju/field-icons-react/24/outline`, the 24x24 solid icons can be imported from `@jinshuju/field-icons-react/24/solid`, the 20x20 solid icons can be imported from `@jinshuju/field-icons-react/20/solid`, and 16x16 solid icons can be imported from `@jinshuju/field-icons-react/16/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@jinshuju/field-icons-react/24/outline/)


## Contributing

Update the svg and run `npm build` to generate a new version. Remember to bump up the version.

## License

This library is MIT licensed.
