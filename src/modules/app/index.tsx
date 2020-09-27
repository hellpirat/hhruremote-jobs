import React from 'react'

import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { MainLayout } from '../../layout/main'

import { VacanciesPage } from '../vacancies'

const queryCache = new QueryCache()

// TODO: routing
export const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <MainLayout>
        <VacanciesPage />
      </MainLayout>
    </ReactQueryCacheProvider>
  )
}
