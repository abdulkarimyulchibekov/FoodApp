import React from 'react'
import { DashboardMainList } from '../DashboardMainList/DashboardMainList'
import { DashboardMainTop } from '../DashboardMainTop/DashboardMainTop'
import "./dashboardmain.scss"

export const DashboardMain = () => {
  return (
    <div className='main'>
      <DashboardMainTop />
      <DashboardMainList />
    </div>
  )
}
