export interface MenuObject {
  path: string
  title: string
  breadcrumbText?: string
  icon?: any
  hidden?: boolean
}

export interface MenuItem {
  label: React.ReactNode
  key: React.Key
  icon?: React.ReactNode
  children?: MenuItem[]
}