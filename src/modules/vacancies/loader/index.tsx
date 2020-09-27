import React from 'react'

import { Card, Skeleton } from 'antd'

interface Props {
  count?: number
}

export const VacancyLoader: React.FC<Props> = ({ count = 3 }) => {
  return (
    <React.Fragment>
      {new Array(count).fill(0).map((item, index) => (
        <Card key={index}>
          <Skeleton avatar title={false} loading active />
        </Card>
      ))}
    </React.Fragment>
  )
}
