import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="shadow-xl rounded-lg px-10 py-6 bg-secondary">{children}</div>
}

export default Card
