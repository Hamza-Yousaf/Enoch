import gql from "graphql-tag";

export const POSTS_QUERY = gql`
  query getPosts($limit: Int!, $offset: Int!) {
    getAllPost(limit: $limit, offset: $offset) {
      id

      text
      whoCanSeePost
      url
      imageurl
      createdAt
      updatedAt
      user {
        id
        userName
        bio
        profileImage
        firstName
        lastName
        followerCount
      }
      comments {
        id
        text
        profileImage
        userName
      }
      perPostViewCount
      document
      documentProps {
        sizes
        filename
        fileExtentions
      }
      poll {
        optionA
        optionB
        optionC
        optionD
        totalVoteCount
        voteDurationTimeLeft
        PollCheckUser {
          voteStatus
          userSelectOption
        }
        optionAPercent
        optionBPercent
        optionCPercent
        optionDPercent
      }
      pollQuestion
    }
  }
`;

// poll query
export const Poll_Query = gql`
  query getPolls($limit: Int!, $offset: Int!) {
    getAllPost(offset: $offset, limit: $limit) {
      pollQuestion
      url
      imageurl
      poll {
        optionA
        optionB
        optionC
        optionD
        totalVoteCount
        voteDurationTimeLeft
      }
      comments {
        text
        userName
        profileImage
      }
      id
    }
  }
`;

export const USER_POSTS = gql`
  query getPosts($limit: Int!, $offset: Int!) {
    getAllPost(limit: $limit, offset: $offset) {
      id
      title
      text
      url
      imageurl
      createdAt
      updatedAt
      user {
        id
        userName
        bio
        profileImage
        firstName
        lastName
        followerCount
      }
      comments {
        text
      }
      # likeReactioncounter
      # wowreactioncounter
      likeCount
      dislikeCount
    }
  }
`;

export const BACKGROUND_AVATAR = gql`
  query {
    BGAvatar {
      id
      bgRpgSrc
      bgRAliensSrc
      bgApocalypsegSrc
    }
  }
`;

export const RPG_AVATAR_IMAGES = gql`
  query {
    RpgAvatar {
      id
      userprofileavatar
      oneSrc
      twoSrc
      threeSrc
    }
  }
`;

export const ALIENSS_AVATAR = gql`
  query {
    AliensAvatar {
      id
      userprofileavatar
      oneSrc
      twoSrc
      threeSrc
    }
  }
`;

export const APOCALYPSE_AVATARA = gql`
  query {
    ApocolypseAvatar {
      id
      userprofileavatar
      oneSrc
      twoSrc
      threeSrc
    }
  }
`;

export const LIKE_REACTION_COUNTER = gql`
  query LikeReactionCounter($postid: String!) {
    LikeReactionCounter(postid: $postid)
  }
`;

export const COMMENT_COUNTER = gql`
  query CommentCounter($postid: String!) {
    CommentCounter(postid: $postid)
  }
`;

export const COMMENT_REFRESH_QUERY = gql`
  query CommentRefreshQuery($PostId: String!) {
    CommentRefreshQuery(PostId: $PostId) {
      id
      text
      profileImage
      userName
    }
  }
`;

export const COMMENT_REPLY_REFRESH_QUERY = gql`
  query CommentReplyRefreshQuery($commentid: String!) {
    CommentReplyRefreshQuery(commentid: $commentid) {
      id
      text
      profileImage
      userName
    }
  }
`;

export const COMMENT_REPLY_COUNTER = gql`
  query CommentReplyCounter($commentid: String!) {
    CommentReplyCounter(commentid: $commentid)
  }
`;

export const GET_USER_TOTAL_POST_VIEW = gql`
  query GetAUserTotalPostView($userId: String!) {
    GetAUserTotalPostView(userId: $userId)
  }
`;

export const GET_PROFILE_VIEW_COUNTER = gql`
  query getProfleViewsCounter($userId: String!) {
    getProfleViewsCounter(userId: $userId)
  }
`;
