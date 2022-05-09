import React from "react";
import './style/Posts.css'
import PostBox from './PostBox'

const Posts = () => {
  const blogPosts = [
    {
      'title': `A Post-Mortem on PuPPY`,
      'date': `May 8, 2022`,
      'content': `Insights gained while working on a pay-per-use platform built on the Ethereum blockchain`,
      'imgUrl': `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.iheartteacups.com%2Fwp-content%2Fuploads%2F2016%2F03%2FIMG_49861.jpg&f=1&nofb=1`
    },
    {
      'title': `How do Solana NFT's work?`,
      'date': `May 1, 2022`,
      'content': `A technical analysis of Solana NFT's, completed for CSCI5240 - Introduction to Blockchain`,
      'imgUrl': `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F53a1a597e4b017ac5c2c7f48%2F1625468272323-UL58RRTNDO4X57Z57UPN%2Fgang.jpg&f=1&nofb=1`
    },
    {
      'title': `Dealing with Illegal Content on the Blockchain`,
      'date': `March 27, 2022`,
      'content': `What can be done about unsavory content stored on an immutable ledger? Completed for CSCI5240 - Introduction to Blockchain`,
      'imgUrl': `https://www.boostit.net/wp-content/uploads/2017/09/824915.jpg`
    }
  ]

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <PostBox key={index} index={index} post={post}></PostBox>
      ))}
    </div>
  );
};

export default Posts;