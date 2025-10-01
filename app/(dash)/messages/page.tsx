import DashboardHeader from '@/components/DashboardHeader'
import { DashboardMessagesTable } from '@/components/DashboardMessagesTable'
import React from 'react'

export default function Page() {
    return (
        <div >
            <DashboardHeader />
            <DashboardMessagesTable />
        </div>
    )
}
