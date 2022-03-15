import gql from "graphql-tag";

export const PHOTO_POST = gql`
  mutation photoPost(
    $file: Upload!
    $whoCanSeePost: String!
    $postingAs: String!
    $title: String!
    $text: String!
  ) {
    createPhotPosts(
      file: $file
      whoCanSeePost: $whoCanSeePost
      postingAs: $postingAs
      title: $title
      text: $text
    )
  }
`;

export const VIDEO_POST = gql`
  mutation videoPost(
    $file: Upload!
    $whoCanSeePost: String!
    $postingAs: String!
    $title: String!
    $text: String!
  ) {
    createAvideoPost(
      file: $file
      whoCanSeePost: $whoCanSeePost
      postingAs: $postingAs
      title: $title
      text: $text
    )
  }
`;
export const DOC_POST = gql`
mutation docPost(
  $file: Upload!
  $whoCanSeePost: String!
  $postingAs: String!
  $title: String!
  $text: String!
) {
  createDocumentPost(
    file: $file
    whoCanSeePost: $whoCanSeePost
    postingAs: $postingAs
    title: $title
    text: $text
  )
}
`

export const WOW_REACTION = gql`
  mutation togglewowreaction($postId: String!) {
    togglewowreaction(postId: $postId)
  }
`;
export const LIKE_REACTION = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const UPDATE_USER_AVATAR_PROFILE = gql`
  mutation updateprofile(
    $profileImage: String!
    $backgroundAvatar: String!
    $cardAvatar: String!
    $cardTwoavatar: String!
  ) {
    AvartarProfileUpdate(
      profileImage: $profileImage
      backgroundAvatar: $backgroundAvatar
      cardAvatar: $cardAvatar
      cardTwoavatar: $cardTwoavatar
    ) {
      message
    }
  }
`;

export const CLAP_REACT = gql`
  mutation clapReactionLike($postId: String!) {
    clapReactionLike(postId: $postId)
  }
`;

export const WOW_REACT = gql`
  mutation wowReactionLike($postId: String!) {
    wowReactionLike(postId: $postId)
  }
`;

export const BILLIANT_REACT = gql`
  mutation brilliantReactionLike($postId: String!) {
    brilliantReactionLike(postId: $postId)
  }
`;

export const LIKE_REACT = gql`
  mutation likeReactionLike($postId: String!) {
    likeReactionLike(postId: $postId)
  }
`;

export const CARE_REACT = gql`
  mutation careReactionLike($postId: String!) {
    careReactionLike(postId: $postId)
  }
`;

export const LOVE_REACT = gql`
  mutation loveReactionLike($postId: String!) {
    loveReactionLike(postId: $postId)
  }
`;

export const DISLIKE_REACT = gql`
  mutation toggleDisLike($postId: String!) {
    toggleDisLike(postId: $postId)
  }
`;

export const NEW_COMMENT = gql`
  mutation newComment(
    $CommentInput: String! 
    $id: String!
    ) {
    newComment(
      CommentInput: $CommentInput 
      id:$id
    )
  }
`;

export const TOGGLE_COMMENT_LIKE = gql`
  mutation toggleCommentLike($commendid: String!){
    toggleCommentLike(commendid: $commendid)
  }
`;

export const COMMENT_LIKE_COUNTER = gql`
query CommentLikeCounter($commentId: String!) {
  CommentLikeCounter(commentId: $commentId)
}
`;

export const COMMENT_REPLY = gql`
  mutation CommentReply(
    $CommentInput: String! 
    $id: String!
    ) {
    CommentReply(
      CommentInput: $CommentInput 
      id:$id
    )
  }
`;

export const POST_VIEW_COUNTS = gql`  
  mutation postViewCounts($postId: String!){
    postViewCounts(postId: $postId)
  }
`;


