import { Nullable } from '.'

export interface SalaryDTO {
  from: number
  to: Nullable<number>
  currency: string // TODO: enum
  gross: boolean
}

export interface EmployerDTO {
  id: number
  name: string
  url: string
  alternate_url: string
  logo_urls: {
    '90': string
    '240': string
    original: string
  }
  vacancies_url: string
  trusted: boolean
}

export interface ScheduleDTO {
  id: string
  name: string
}

export interface AddressDTO {
  id: number
  city: string
  street: string
  building: string
  description: Nullable<string>
  lat: number
  lng: number
  raw: string
  metro: {
    station_name: string
    line_name: string
    station_id: string
    line_id: string
    lat: number
    lng: number
  }
  metro_stations: [
    {
      station_name: string
      line_name: string
      station_id: string
      line_id: string
      lat: number
      lng: number
    }
  ]
}

export interface VacancyDTO {
  id: number
  premium: boolean
  name: string
  // department: null ?
  has_test: boolean
  response_letter_required: boolean
  area: {
    id: number
    name: string
    url: string
  }
  salary: Nullable<SalaryDTO>
  type: {
    id: string // TODO: enum
    name: string
  }
  address: AddressDTO
  response_url: Nullable<string>
  // sort_point_distance: null
  employer: EmployerDTO
  published_at: string
  created_at: string
  archived: boolean
  apply_alternate_url: string
  insider_interview: null
  url: string
  alternate_url: string
  relations: []
  snippet: {
    requirement: string
    responsibility: string
  }
  contacts: null
  schedule: ScheduleDTO
  working_days: []
  working_time_intervals: []
  working_time_modes: []
  accept_temporary: boolean
}
