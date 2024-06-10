import type { RuntimeConfig } from 'nuxt/schema'
import type { NitroFetchRequest, $Fetch } from 'nitropack'

export type Job = {
  _id: string
  title: string
  company: string
  company_description: string
  description: string
  status: boolean
  selectedTags: Array<{
    id: number
    title: string
  }>
}

export default (fetch: $Fetch<NitroFetchRequest>, config: RuntimeConfig) => ({
  getJobs(): Promise<Job[]> {
    return fetch<Job[]>(`${config.public.baseURL}/jobs`)
  },

  getJobById(jobId: string | string[]): Promise<Job> {
    return fetch<Job>(`${config.public.baseURL}/jobs/${jobId}`)
  },

  createJob(body: Job): Promise<Job> {
    return fetch<Job>(`${config.public.baseURL}/jobs`, {
        method: 'POST',
        body
      }
    )
  },

  updateJob(body: Job, jobId: string | string[]): Promise<Job> {
    return fetch<Job>(`${config.public.baseURL}/jobs/${jobId}`, {
        method: 'PUT',
        body
      }
    )
  },

  deleteJob(jobId: string | string[]): Promise<Job> {
    return fetch<Job>(`${config.public.baseURL}/jobs/${jobId}`, {
        method: 'DELETE'
      }
    )
  },
})