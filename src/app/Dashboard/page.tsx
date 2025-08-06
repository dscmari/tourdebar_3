import { auth } from '@/auth'
import LogoutButton from '@/components/LogoutButton'
import { redirect } from 'next/navigation'

import React from 'react'

export default async function Page() {

  const session = await auth()  
  console.log(session)
  if(!session) redirect("/")  

  return (
    <div>
        <p>dashboard</p>
        <p>nur eingeloggt erreichbar</p>
        <LogoutButton/>
    </div>
  )
}
