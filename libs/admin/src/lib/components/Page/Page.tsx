import { HTMLAttributes } from 'react'

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string
  loading?: boolean
}

export default function Page({
  headerText,
  loading = false,
  children,
}: PageProps) {
  return (
    <>
      <h1>{headerText}</h1>
      {loading ? <div>loading...</div> : children}
    </>
  )
}
