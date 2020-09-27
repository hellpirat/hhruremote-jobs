import React from 'react'

import { Avatar, Button, Card, List } from 'antd'
import { VacancyDTO } from '@src/@types/dto'

import { SalaryLabel } from '../salary-label'
import emptyAvatar from './empty-avatar.png'

interface Props {
  vacancy: VacancyDTO
}

export const VacancyItem: React.FC<Props> = ({ vacancy }) => {
  const avatarUrl = vacancy.employer.logo_urls?.[240] || emptyAvatar
  return (
    <Card>
      <List.Item
        actions={[
          <Button href={vacancy.apply_alternate_url} target="_blank" type="primary">
            Откликнуться на hh.ru
          </Button>,
        ]}
        extra={<SalaryLabel salary={vacancy.salary} />}
      >
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
