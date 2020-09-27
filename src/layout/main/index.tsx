import React from 'react'

import { Layout } from 'antd'

const { Content } = Layout

interface Props {}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Content>
        <div style={{ padding: 20 }}>{children}</div>
      </Content>
    </Layout>
  )
}
