export type Contact = {
  name: {
    first: string
    last: string
  }
  email: string
  login: {
    uuid: string
  }
  picture?: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  tag?: string
}
