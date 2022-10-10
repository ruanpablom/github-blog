export type Issue = {
  id: number
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  url: string
}
