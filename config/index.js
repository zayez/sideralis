import appconfig from "../appconfig.json"

const config = {
  ...appconfig,
}

export const nasa = config.nasa
export const app = config.app

export default config
