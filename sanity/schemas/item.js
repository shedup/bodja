export default {
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      description: 'Enter full name of the product',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'A unique identifier, press generate',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      description: 'Price in dollars upto 2 decimal points',
      type: 'number',
    },
    {
      name: 'details',
      description: 'Description of the product',
      title: 'Details',
      type: 'string',
    },
  ],
}
