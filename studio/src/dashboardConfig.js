export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f38f153469979c5551355e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o4oy9nc4',
                  apiId: 'a2dfca65-42b1-460c-9a60-a1b544e1504f'
                },
                {
                  buildHookId: '5f38f153ad43c4de42a78bff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7mapc8hm',
                  apiId: 'cca6a53b-6b85-4486-94a9-1838ccdc9bf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbuitvydas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7mapc8hm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
