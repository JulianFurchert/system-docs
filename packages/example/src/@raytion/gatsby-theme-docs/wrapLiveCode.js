import React from 'react';
import { ThemeProvider, SearchProvider} from '@raytion/sri-frontend-ui-components'

const wrapLiveCode = props => (
  <SearchProvider 
    api="http://solr.intranet.raytion.com/rest/v1/"
    trackUrlState={false} 
    isSearchActive={false} 
    onSearch={({ setReponse })=>{
      setReponse(defaultResponse)
    }}
  >
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  </SearchProvider>
)

export default wrapLiveCode


const defaultResponse = {
  data: {
    resultcounts: {
      all: 200,
    },
    resultsBlocks: {
      people: [
        {
          name: 'Erika Mustermann',
          location: 'Berlin',
          link: 'https://www.google.de/',
          avatar: 'https://api.adorable.io/avatars/48/abott@adorable.png',
          defectedAvatar: 'https://api.adorabtars/48/abott@adorable.png',
          mail: 'example@mail.com',
          phone: '049171823'
        },
        {
          name: 'Erika Mustermann',
          location: 'Berlin',
          link: 'https://www.google.de/',
          avatar: 'https://api.adorable.io/avatars/48/abott@adorable.png',
          defectedAvatar: 'https://api.adorabtars/48/abott@adorable.png',
          mail: 'example@mail.com',
          phone: '049171823'
        }
      ]
    },
    recommendedLinks: [
      {
        title: 'Example Title',
        source: 'Recommended Link',
        url: 'https://www.google.de/',
        snippet: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      },
      {
        title: 'Example Title',
        source: 'Recommended Link',
        url: 'https://www.google.de/',
        snippet: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      }
    ],
    results: [
      {
        url: ['https://www.google.de/'],
        source: ['source'],
        title: ['title'],
        snippet: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
        collection: ['Sharepoint'],
        user: ['Person_1', 'Person_2']
      },
      {
        url: ['https://www.google.de/'],
        source: ['source'],
        title: ['title'],
        snippet: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
        collection: ['Sharepoint'],
        user: ['Person_1', 'Person_2']
      }
    ],
    filters: {
      filetypes: [
        {
          name: 'Keynote',
          value: 'key',
          count: 211,
        },
        {
          name: 'PowerPoint',
          value: 'ppt',
          count: 120,
        },
        {
          name: 'Microsoft Word',
          count: 80,
          value: 'doc'
        },
        {
          name: 'Illustrator',
          count: 60,
          value: 'ai'
        }
      ],
      languages: [
        {
          name: 'English',
          count: 211,
          value: 'en'
        },
        {
          name: 'Italian',
          count: 120,
          value: 'it'
        },
        {
          name: 'French',
          count: 80,
          value: 'fr'
        },
        {
          name: 'Japanese',
          count: 60,
          value: 'ja'
        },
        {
          name: 'German',
          count: 44,
          value: 'de'
        },
        {
          name: 'Danish',
          count: 38,
          value: 'da'
        },
        {
          name: 'Dutch',
          count: 34,
          value: 'nl'
        },
        {
          name: 'Polish',
          count: 20,
          value: 'pl'
        },
        {
          name: 'Slovak',
          count: 11,
          value: 'sk'
        }
      ]
    }
  }
}