import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout

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
