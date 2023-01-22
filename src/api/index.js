const shouldUseMock = process.env.NODE_ENV === "development"
// const shouldUseMock = false

const value = (
  await import(`${shouldUseMock ? `./mockAPI.js` : `./realAPI.js`}`)
).default

export default value
