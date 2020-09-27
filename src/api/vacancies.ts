import ky from 'ky'

import { request } from '@lib/request'

import { VacancyDTO } from '@src/@types/dto'

export type VacanciesResponseType = {
  items: VacancyDTO[]
  found: number
  pages: number
  per_page: number
  page: number
}

export const fetch = async (): Promise<VacanciesResponseType> => request.get('vacancies').json()
