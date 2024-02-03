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
      name: 'role',
      title: 'Role',
      description: "Enter the member's role",
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      description: 'Provide any additional description',
      validation: (Rule) =>
        Rule.custom((value) => {
          const wordCount = value.split(/\s+/).filter((word) => word.length > 0).length
          const maxWordCount = 50 // Change this to your desired maximum word count

          if (wordCount > maxWordCount) {
            return `Exceeds the maximum word count of ${maxWordCount}`
          }

          return true
        }),
      type: 'text',
    },
  ],
}
