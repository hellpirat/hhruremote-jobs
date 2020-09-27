import React from 'react'

import { List, Avatar, Card } from 'antd'
import { VacancyDTO } from '@src/@types/dto'

interface Props {
  vacancy: VacancyDTO
}

export const VacancyItem: React.FC<Props> = ({ vacancy }) => {
  return (
    <Card>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={vacancy.employer.logo_urls[240]} />}
          title={<a>{vacancy.name}</a>}
          description={vacancy.employer.name}
        />
      </List.Item>
    </Card>
  )
}
