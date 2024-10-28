import React from 'react'
import { HeaderBox } from '@/components/HeaderBox'
import { TotalBalanceBox } from '@/components/TotalBalanceBox'
import { RightSidebar } from '@/components/RightSidebar'

const HomePage = () => {
  const loggedIn = {firstName: "Grace", lastName:"Makena", email:"keshgrace62@gmail.com"}
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox 
           type ="greeting"
           title="Welcome"
           user={loggedIn?.firstName || "Guest"}
           subtext="Access and Manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
           accounts ={[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}
           
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar
       user={loggedIn} 
       transactions={[]}
       banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
      />
    </section>
  )
}

export default HomePage