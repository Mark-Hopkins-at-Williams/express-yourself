
      const tree = {
        text: 'Sam likes boats',
        root: {
          nodeType: 'event',
          word: 'like',
          spans: [
            {
              start: 4,
              end: 9
            }
          ],
          children: [
            {
              nodeType: 'entity',
              word: 'Sam',
              link: 'subject',
              attributes: [ 'Person' ],
              spans: [
                {
                  start: 0,
                  end: 3
                }
              ]
            },
            {
              nodeType: 'entity',
              word: 'boat',
              link: 'object',
              attributes: [ '>1'],
              spans: [
                {
                  start: 10,
                  end: 17
                }
              ]
            }
          ]
        }
      };
