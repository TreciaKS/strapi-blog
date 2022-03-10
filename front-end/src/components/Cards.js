import React from 'react'
import CardsLayout from './CardsLayout'
import BlogCards from './blogs/BlogCards'

const Cards = () => {
  return (
    <CardsLayout>
        <BlogCards 
        image= {"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
        title = {"This is my first time"}
        description = {"Building a react app is reallly nice, for now, difficulties ahead"}
        />
        <BlogCards 
        image= {"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
        title = {"Struggling Here"}
        description = {"testing react children"}
        />
        <BlogCards 
        image= {"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
        title = {"Fetching data with React"}
        description = {"API is workiung, but how to diplay it..."}
        />
    </CardsLayout>
  )
}
export default Cards
