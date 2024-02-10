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
      description: "Enter the member's first and last name",
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Enter the order members will appear, lowest shows up first.',
      type: 'number',
    },
    {
      name: 'role',
      title: 'Role',
      description: "Enter the member's role",
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      description: 'Provide any additional description',
      // Rule enforced on this details field.
      validation: (Rule) =>
        Rule.custom((value) => {
          const charCount = value.length
          const maxCharCount = 250 // Change this to your desired maximum characters, not word.

          if (charCount > maxCharCount) {
            return `Exceeds the maximum charcter count of ${maxCharCount}`
          }

          return true
        }),
      type: 'text',
    },
  ],
}
