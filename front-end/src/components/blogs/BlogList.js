import React, { Component } from 'react'

export default class BlogList extends Component {

  constructor() {
    super();
    this.state= {
      blogs: []
    };
  }

  // to fetch data from localhost
  componentWillUnmount() {
    fetch('http://localhost:1337/api/trecia-blogs')
      .then(res => {
        if(res.status >= 400) {
          throw new Error("Bad Request")
        }
        return res.json()
      })
      .then((blogs) => {
        // add blogs into empty []
        this.setState({blogs})
      })
  }
  // {
  // http://localhost:1337/api/trecia-blogs returns this data
  //   data: [ ],
  //   meta: {
      //   pagination: {
      //   page: 1,
      //   pageSize: 25,
      //   pageCount: 0,
      //   total: 0
  //   }
  //   }
  //   }

  // http://localhost:1337/api/trecia-blogs/1 or with different id returns this
  // {
  //   data: {
  //   id: 1,
  //   attributes: {
  //   title: "A Brief Intro About Me",
  //   content: "# Trecia Kat
    
  //   A CSS lover. I'm working towards my goal of being a great Front-End Developer and Developer Advocate. I'm very passionate about this field because It drives me to be inquisitive and resourceful.
    
  //   I taught myself how to code so that I may acquire the ability to improve the quality of websites and to bring my ideas to life.
    
  //   # Reach Out
  //   I am seeking for an entry-level/ part-time opportunity where I can put my abilities to work and to grow my skill set in being a Front-End Developer| Developer Advocate and to put my creative and problem-solving skills to use.
    
  //   I would love to collaborate and contribute to open-source projects. Feel free to connect!",
  //   createdAt: "2022-03-09T19:34:19.265Z",
  //   updatedAt: "2022-03-09T19:53:02.796Z",
  //   publishedAt: null
  //   }
  //   },
  //   meta: { }
  //   }

  // there should be an image field returned as well but isn't

  render() {
    return (
      <div>
        <h1>This is where blog list from api should appear testing porpose</h1>
        {
          this.state.blogs.map(item => {
            return(
              <h1>{item.data.attributes.title}</h1>
            )
          })
        }
      </div>
    )
  }
}
