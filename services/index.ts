import type { RuntimeConfig } from 'nuxt/schema'
import type { NitroFetchRequest, $Fetch } from 'nitropack'

import JobService from "./JobService";

export default (fetch: $Fetch<NitroFetchRequest>, config: RuntimeConfig) => ({
  jobService: JobService(fetch, config)
})