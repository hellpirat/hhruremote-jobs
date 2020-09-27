import React from 'react'

import { useQuery } from 'react-query'
import { List } from 'antd'

import * as vacanciesApi from '@api/vacancies'

import { MainLayout } from '../../layout/main'
import { VacancyItem } from './vacancy-item'

// const data = [
//   {
//     title: 'Senior IOS⁢ Developer',
//     logo: 'https://hhcdn.ru/employer-logo/3388810.png',
//   },
//   {
//     title: 'Middle to Senior Developer Unity 3D C# / Программист-разработчик',
//     logo: 'https://hhcdn.ru/employer-logo/2177418.png',
//   },
//   {
//     title: 'Ant Design Title 3',
//     logo: 'https://hhcdn.ru/employer-logo/3388810.png',
//   },
//   {
//     title: 'Ant Design Title 4',
//     logo: 'https://hhcdn.ru/employer-logo/3388810.png',
//   },
// ]

export const VacanciesPage = () => {
  const { isLoading, error, data } = useQuery('vacancies', vacanciesApi.fetch)
  console.log(isLoading)
  console.log(error)
  console.log(data)

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <MainLayout>
      <List itemLayout="horizontal" dataSource={data?.items} renderItem={(item) => <VacancyItem vacancy={item} />} />
    </MainLayout>
  )
}
