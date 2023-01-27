export const nasa = {
  api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
}

export const app = {
  api_response_delay: process.env.NEXT_PUBLIC_API_RESPONSE_DELAY,
}

const config = {
  nasa,
  app,
}

export default config
