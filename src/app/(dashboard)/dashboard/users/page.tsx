import Link from 'next/link'
import React from 'react'

const users = () => {
  return (<>

    <li> <Link href='/dashboard/users/1'>user 1</Link></li>
    <li> <Link href='/dashboard/users/2'>user 2</Link></li>
    <li> <Link href='/dashboard/users/3'>user 3</Link></li>
    </>
  )
}

export default users