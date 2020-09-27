import ky from 'ky'

import { CONFIG } from '../config'

export const request = ky.create({
  prefixUrl: CONFIG.API_ROOT,
})
