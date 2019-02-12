export interface IVuetifyDataTable<Type = any> {

  customFilter?: IVuetifyDataTableCustomFilter<Type>

  customSort?: Function

  dark?: boolean

  expand?: boolean

  filter?: IVuetifyDataTableFilter

  headerText?: string

  headers: IVuetifyDataTableHeader[]

  hideActions?: boolean

  hideHeaders?: boolean

  itemKey?: string

  items: Type[]

  light?: boolean

  loading?: boolean | string

  mustSort?: boolean

  noDataText?: string

  noResultsText?: string

  'pagination.sync'?: object
  
  rowsPerPageItems?: any[]

  rowsPerPageText?: string

  search?: string

  selectAll?: boolean | string

  selected?: Type[]

  totalItems?: number

}

export interface IVuetifyDataTableHeader {

  [path: string]: any

  align?: 'left' | 'center' | 'right' | 'justify'
  
  class?: string

  sortable?: boolean

  text: string

  value: string

  width?: number

}

export interface IVuetifyDataTableFilter {
  (value: any, search: string): boolean
}

export interface IVuetifyDataTableCustomFilter<Type = any> {
  (items: Type[], search: string, filter: IVuetifyDataTableFilter, headers: IVuetifyDataTableHeader[]): Type[]
}