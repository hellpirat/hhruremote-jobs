import React from 'react'

import { List, Avatar, Card } from 'antd'
import { Nullable } from '@src/@types'
import { SalaryDTO, VacancyDTO } from '@src/@types/dto'

import emptyAvatar from './empty-avatar.png'

interface Props {
  vacancy: VacancyDTO
}

interface ExtraInfoProps {
  salary: Nullable<SalaryDTO>
}

const ExtraInfo = ({ salary }: ExtraInfoProps) => {
  if (salary) {
    const { from, to, currency } = salary
    if (from && to) {
      return (
        <div>
          {from}-{to} {currency}
        </div>
      )
    }
    if (to) {
      return (
        <div>
          До {to} {currency}
        </div>
      )
    }
    return (
      <div>
        От {from} {currency}
      </div>
    )
  }

  return null
}

export const VacancyItem: React.FC<Props> = ({ vacancy }) => {
  const avatarUrl = vacancy.employer.logo_urls?.[240] || emptyAvatar
  console.log(vacancy)
  return (
    <Card>
      <List.Item extra={<ExtraInfo salary={vacancy.salary} />}>
        <List.Item.Meta
          avatar={<Avatar src={avatarUrl} />}
          title={
            <a href={vacancy.alternate_url} target="_blank">
              {vacancy.name} {vacancy.salary && `От ${vacancy.salary.from} ${vacancy.salary.currency}`}
            </a>
          }
          description={vacancy.employer.name}
        />
      </List.Item>
    </Card>
  )
}
