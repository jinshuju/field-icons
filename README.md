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


## ReactNative

First, install `@jinshuju/field-icons-react-native` from npm:

```sh
npm install @jinshuju/field-icons-react-native
```

Now each icon can be imported individually as a React component:

```js
import { FieldIconTextField } from '@jinshuju/field-icons-react-native/24/solid'

function MyComponent() {
  return <FieldIconTextField size={24} color="blue" />
}
```

The 24x24 outline icons can be imported from `@jinshuju/field-icons-react/24/outline`. Other folders are left empty for now.

Icons use an upper camel case naming convention and are always preffixed with the word `FieldIcon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@jinshuju/field-icons-react/24/outline/)


## Contributing

如果要更新图标，修改 src/24/outline 中对应的 svg 即可。文件名以小写字母开头，运行 `npm run build` 会替换为 FieldIconCamelCase。 例如 matrix-select.svg -> FieldIconMatrixSelect. 提交后github actions 会自动运行并生成对应的insider-0.0.0.xxx。 测试没问题后，打上 tag (v4.0.x) 会 GitHub Actions 自动 pre-release.

Don't introduce other tooling like pnpm or yarn.

## License & Credit

This library is MIT licensed. The build system is copied from [heroicons](https://heroicons.com/)
