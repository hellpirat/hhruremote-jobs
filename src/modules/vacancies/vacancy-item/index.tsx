import React from 'react'

import { Avatar, Button, Card, Descriptions, List } from 'antd'

import { VacancyDTO } from '@src/@types/dto'
import { useToggle } from '@lib/hooks'

import { SalaryLabel } from '../salary-label'
import emptyAvatar from './empty-avatar.png'

interface Props {
  vacancy: VacancyDTO
}

export const VacancyItem: React.FC<Props> = ({ vacancy }) => {
  const avatarUrl = vacancy.employer.logo_urls?.[240] || emptyAvatar
  const [isOpen, isOpenActions] = useToggle()

  return (
    <Card>
      <List.Item
        actions={[
          <Button href={vacancy.apply_alternate_url} target="_blank" type="primary">
            Откликнуться на hh.ru
          </Button>,
          <Button onClick={isOpenActions.handleToggle}>Подробнее</Button>,
        ]}
        extra={<SalaryLabel salary={vacancy.salary} />}
      >
        <List.Item.Meta
          avatar={<Avatar src={avatarUrl} />}
          title={
            <a href={vacancy.alternate_url} rel="noopener noreferrer" target="_blank">
              {vacancy.name}
            </a>
          }
          description={vacancy.employer.name}
        />
      </List.Item>
      {isOpen && (
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Ключевые навыки">{vacancy.snippet.requirement}</Descriptions.Item>
          <Descriptions.Item label="Обязанности">{vacancy.snippet.responsibility}</Descriptions.Item>
        </Descriptions>
      )}
    </Card>
  )
}
