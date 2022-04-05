import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-05',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
} 