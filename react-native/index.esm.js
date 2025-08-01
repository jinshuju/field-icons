// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`@jinshuju/field-icons-react-native\` directly is not supported. Please import from either \`@jinshuju/field-icons-react-native/16/solid\`, \`@jinshuju/field-icons-react-native/20/solid\`, \`@jinshuju/field-icons-react-native/24/solid\`, or \`@jinshuju/field-icons-react-native/24/outline\` instead.`
      )
    },
  }
)
