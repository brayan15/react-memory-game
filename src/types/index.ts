export type MetaCard = {
  name: string
  slug: string
  type: string
  uuid: string
  space: string
  locale: string
  excerpt: string
  private: boolean
  created_at: string
  updated_at: string
  published_at: string
  version_type: string
}

export type ImageCard = {
  url: string
  uuid: string
  title: string
  alt_text?: string | null
  description?: string | null
  content_type: string
}

export type FieldCard = {
  image: ImageCard
}

export type CardItem = {
  meta: MetaCard
  fields: FieldCard
}
