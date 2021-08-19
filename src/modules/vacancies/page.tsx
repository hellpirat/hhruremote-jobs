import React from 'react'

import { useInfiniteQuery } from 'react-query'
import { Button, List, Alert } from 'antd'

import * as vacanciesApi from '@api/vacancies'

import { VacancyLoader } from './loader'
import { VacancyItem } from './vacancy-item'

import styles from './styles.module.css'

export const VacanciesPage = () => {
  const { isLoading, error, data, fetchMore, isFetchingMore, canFetchMore } = useInfiniteQuery(
    'vacancies',
    async (key, page = 0) => {
      return await vacanciesApi.fetch({ page: Number(page) + 1 })
    },
    {
      getFetchMore: (lastGroup) => {
        return lastGroup.page
      },
    }
  )

  const handleLoadMore = () => fetchMore()

  if (isLoading) {
    return <VacancyLoader count={5} />
  }

  if (error) {
    return <Alert message="Something went wrong" type="error" />
  }

  return (
    <>
      {data?.map((page) => (
        <List
          key={page.page}
          itemLayout="vertical"
          dataSource={page.items}
          renderItem={(item) => <VacancyItem vacancy={item} />}
        />
      ))}
      <div className={styles.loadMoreWrapper}>
        <Button type="primary" disabled={Boolean(isFetchingMore) || !canFetchMore} onClick={handleLoadMore}>
          Load more
        </Button>
      </div>
    </>
  )
}
