import { request } from '@lib/request'

import { VacancyDTO } from '@src/@types/dto'

export type VacanciesResponseType = {
  items: VacancyDTO[]
  found: number
  pages: number
  per_page: number
  page: number
}

export type VacanciesRequestType = {
  page?: number
}

const IT_SPECIALIZATION = '1.221'
const REMOTE_TYPE = 'remote'

export const fetch = async ({ page = 0 }: VacanciesRequestType): Promise<VacanciesResponseType> =>
  request
    .get('vacancies', {
      searchParams: {
        schedule: REMOTE_TYPE,
        specialization: IT_SPECIALIZATION,
        page,
      },
    })
    .json()
