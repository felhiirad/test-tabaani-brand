import React from 'react';
import style from './post.module.css'



const Posts = ({posts,loading}) => {
    if (loading){
        return <h2>Loading... !please wait</h2>
    }


    return (
        <>
            {
                posts.map(post=>(
                    <div key={post.id} className={style.posts}  >
                        <img src={post.url} alt=""></img>
                        <div className={style.box}>
                            <h2>#id:{post.id}</h2>
                            <p>titel: {post.title}</p>
                            <span>image</span>
                        </div>

                    </div>

                ))
            }

        </>
      );
}
 
export default Posts;