import React from 'react'

import { List, Avatar, Card } from 'antd'
import { VacancyDTO } from '@src/@types/dto'

import emptyAvatar from './empty-avatar.png'

interface Props {
  vacancy: VacancyDTO
}

export const VacancyItem: React.FC<Props> = ({ vacancy }) => {
  const avatarUrl = vacancy.employer.logo_urls?.[240] || emptyAvatar
  return (
    <Card>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={avatarUrl} />}
          title={
            <a href={vacancy.alternate_url} target="_blank">
              {vacancy.name}
            </a>
          }
          description={vacancy.employer.name}
        />
      </List.Item>
    </Card>
  )
}
