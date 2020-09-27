import React from 'react'

import { Nullable } from '@src/@types'
import { SalaryDTO } from '@src/@types/dto'

interface Props {
  salary: Nullable<SalaryDTO>
}

export const SalaryLabel = ({ salary }: Props) => {
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
