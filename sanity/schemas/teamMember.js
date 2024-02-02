export default {
  name: 'member',
  title: 'Member',
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
      title: 'Name',
      description: "Enter the member's full name",
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      description: "The member's role",
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      description: 'Provide any additional description',
      type: 'string',
    },
  ],
}
