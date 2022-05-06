import Contentful, { createClient } from 'contentful'
type Post = {
  title: Contentful.EntryFields.Text
  description: Contentful.EntryFields.Text
  thumbnail: Contentful.Asset
  content: Contentful.EntryFields.RichText
}
const client = createClient({
  space: 'yjv7xzqheiuf',
  accessToken: '_JcwkY-A_0psSkr7SoEN_-fpfdac-uN-ualGQl54Yco'
})

export async function getPosts(): Promise<Contentful.Entry<Post>[]> {
  const { items } = client.getEntries<Post>({
    content_type: 'post'
  })
  return items
}
