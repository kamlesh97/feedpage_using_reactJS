import React, { useState } from "react";
import { data } from "./data";
import pagination from "./Pagination";

const Posts = () => {
  

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3)



    const indexOfLastPost=currentPage*postPerPage
    const indexOfFirstPost=indexOfLastPost-postPerPage
    const currentPost=data.slice(indexOfFirstPost,indexOfLastPost)


    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

  return (
      <div>
    <div className="main">
<div className='text'>
    <img src='https://www.mediainfoline.com/wp-content/uploads/2021/01/Unluclass.jpg' className='main-logo' />
<h1>
  <a href="" class="typewrite center" data-period="2000" data-type='[ "Take Your Career to new heights.", "Watch lessons from the best and learn from their successes,", "failures and stories." ]'>
    <span class="wrap"></span>
  </a>
</h1>
</div>
      <div className='list'>
        {currentPost.map((post) => (
          <div className='list-item' >
            <div>
              <img src={post.thumbnail_image} alt={post.event_name} />
            </div>
            <div className='title'>{post.event_name}</div>
            
              <div className="status">
                <div className="status icon">
                  <div><span><img src='https://image.flaticon.com/icons/png/512/889/889140.png' className='i' /></span><span>{post.likes}</span></div> 
                  <div><span><img src='https://image.flaticon.com/icons/png/512/944/944957.png' className='i' /></span><span></span>{post.views}</div>
                </div>

                <div><span><img src='https://image.flaticon.com/icons/png/512/1828/1828874.png' className='i' /></span><span>{post.shares}</span></div>
              </div>
          
          </div>
        ))}
      </div><hr/>

      
    </div>

                <pagination postPerPage={postPerPage} totalPost={data.length}  paginate={paginate} />
    </div>
  );
};

export default Posts;
