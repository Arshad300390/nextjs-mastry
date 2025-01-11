import React from 'react'


const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden box-border">
    <div className="bg-gray-800 text-white p-4">
      dashboard navbar
    </div>
    <main className="ml-2 mt-4">{children}</main>
  </div>
  )
}

export default layout