import React from 'react'
import { DashboardData } from '../DashboardData/DashboardData'
import { DashboardOrdered } from '../DashboardOrdered/DashboardOrdered'
import "./Dashboardcontent.scss"
export const DashboardContent = () => {
  return (
    <div className='dashboard__content'>
      <DashboardOrdered />
      <DashboardData />
    </div>
  )
}
