import React from 'react'

import { useQuery } from 'react-query'
import { Card, List, Skeleton } from 'antd'

import * as vacanciesApi from '@api/vacancies'

import { MainLayout } from '../../layout/main'
import { VacancyItem } from './vacancy-item'
import { VacancyLoader } from './loader'

export const VacanciesPage = () => {
  const { isLoading, error, data } = useQuery('vacancies', vacanciesApi.fetch)
  console.log(isLoading)
  console.log(error)
  console.log(data)

  if (isLoading) {
    return <VacancyLoader count={5} />
  }

  if (error) {
    return <div>error</div>
  }

  return <List itemLayout="horizontal" dataSource={data?.items} renderItem={(item) => <VacancyItem vacancy={item} />} />
}
