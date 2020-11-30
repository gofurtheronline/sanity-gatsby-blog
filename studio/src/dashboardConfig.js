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
                  buildHookId: '5fc48d90d55272ee40defe63',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-52uz91wt',
                  apiId: '84388ff0-387e-4c26-b354-37dcd3a08caa'
                },
                {
                  buildHookId: '5fc48d90da660a9b1e4aa239',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u7mhkudo',
                  apiId: 'feb1175b-8d81-4554-ab5d-f479ada227d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u7mhkudo.netlify.app', category: 'apps' }
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
