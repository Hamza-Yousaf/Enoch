"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
exports.COMMENT_REPLY =
  exports.COMMENT_LIKE_COUNTER =
  exports.TOGGLE_COMMENT_LIKE =
  exports.NEW_COMMENT =
  exports.DISLIKE_REACT =
  exports.LOVE_REACT =
  exports.CARE_REACT =
  exports.LIKE_REACT =
  exports.BILLIANT_REACT =
  exports.WOW_REACT =
  exports.CLAP_REACT =
  exports.UPDATE_USER_AVATAR_PROFILE =
  exports.LIKE_REACTION =
  exports.WOW_REACTION =
  exports.VIDEO_POST =
  exports.PHOTO_POST =
    void 0;
var graphql_tag_1 = require("graphql-tag");
exports.PHOTO_POST = graphql_tag_1["default"](
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  mutation photoPost(\n    $file: Upload!\n    $whoCanSeePost: String!\n    $postingAs: String!\n    $title: String!\n    $text: String!\n  ) {\n    createPhotPosts(\n      file: $file\n      whoCanSeePost: $whoCanSeePost\n      postingAs: $postingAs\n      title: $title\n      text: $text\n    )\n  }\n",
      ],
      [
        "\n  mutation photoPost(\n    $file: Upload!\n    $whoCanSeePost: String!\n    $postingAs: String!\n    $title: String!\n    $text: String!\n  ) {\n    createPhotPosts(\n      file: $file\n      whoCanSeePost: $whoCanSeePost\n      postingAs: $postingAs\n      title: $title\n      text: $text\n    )\n  }\n",
      ]
    ))
);
exports.VIDEO_POST = graphql_tag_1["default"](
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  mutation videoPost(\n    $file: Upload!\n    $whoCanSeePost: String!\n    $postingAs: String!\n    $title: String!\n    $text: String!\n  ) {\n    createAvideoPost(\n      file: $file\n      whoCanSeePost: $whoCanSeePost\n      postingAs: $postingAs\n      title: $title\n      text: $text\n    )\n  }\n",
      ],
      [
        "\n  mutation videoPost(\n    $file: Upload!\n    $whoCanSeePost: String!\n    $postingAs: String!\n    $title: String!\n    $text: String!\n  ) {\n    createAvideoPost(\n      file: $file\n      whoCanSeePost: $whoCanSeePost\n      postingAs: $postingAs\n      title: $title\n      text: $text\n    )\n  }\n",
      ]
    ))
);
exports.WOW_REACTION = graphql_tag_1["default"](
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  mutation togglewowreaction($postId: String!) {\n    togglewowreaction(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation togglewowreaction($postId: String!) {\n    togglewowreaction(postId: $postId)\n  }\n",
      ]
    ))
);
exports.LIKE_REACTION = graphql_tag_1["default"](
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  mutation toggleLike($postId: String!) {\n    toggleLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation toggleLike($postId: String!) {\n    toggleLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.UPDATE_USER_AVATAR_PROFILE = graphql_tag_1["default"](
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        "\n  mutation updateprofile(\n    $profileImage: String!\n    $backgroundAvatar: String!\n    $cardAvatar: String!\n    $cardTwoavatar: String!\n  ) {\n    AvartarProfileUpdate(\n      profileImage: $profileImage\n      backgroundAvatar: $backgroundAvatar\n      cardAvatar: $cardAvatar\n      cardTwoavatar: $cardTwoavatar\n    ) {\n      message\n    }\n  }\n",
      ],
      [
        "\n  mutation updateprofile(\n    $profileImage: String!\n    $backgroundAvatar: String!\n    $cardAvatar: String!\n    $cardTwoavatar: String!\n  ) {\n    AvartarProfileUpdate(\n      profileImage: $profileImage\n      backgroundAvatar: $backgroundAvatar\n      cardAvatar: $cardAvatar\n      cardTwoavatar: $cardTwoavatar\n    ) {\n      message\n    }\n  }\n",
      ]
    ))
);
exports.CLAP_REACT = graphql_tag_1["default"](
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  mutation clapReactionLike($postId: String!) {\n    clapReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation clapReactionLike($postId: String!) {\n    clapReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.WOW_REACT = graphql_tag_1["default"](
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        "\n  mutation wowReactionLike($postId: String!) {\n    wowReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation wowReactionLike($postId: String!) {\n    wowReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.BILLIANT_REACT = graphql_tag_1["default"](
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  mutation brilliantReactionLike($postId: String!) {\n    brilliantReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation brilliantReactionLike($postId: String!) {\n    brilliantReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.LIKE_REACT = graphql_tag_1["default"](
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  mutation likeReactionLike($postId: String!) {\n    likeReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation likeReactionLike($postId: String!) {\n    likeReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.CARE_REACT = graphql_tag_1["default"](
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      [
        "\n  mutation careReactionLike($postId: String!) {\n    careReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation careReactionLike($postId: String!) {\n    careReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.LOVE_REACT = graphql_tag_1["default"](
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      [
        "\n  mutation loveReactionLike($postId: String!) {\n    loveReactionLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation loveReactionLike($postId: String!) {\n    loveReactionLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.DISLIKE_REACT = graphql_tag_1["default"](
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(
      [
        "\n  mutation toggleDisLike($postId: String!) {\n    toggleDisLike(postId: $postId)\n  }\n",
      ],
      [
        "\n  mutation toggleDisLike($postId: String!) {\n    toggleDisLike(postId: $postId)\n  }\n",
      ]
    ))
);
exports.NEW_COMMENT = graphql_tag_1["default"](
  templateObject_13 ||
    (templateObject_13 = __makeTemplateObject(
      [
        "\n  mutation newComment(\n    $CommentInput: String! \n    $id: String!\n    ) {\n    newComment(\n      CommentInput: $CommentInput \n      id:$id\n    )\n  }\n",
      ],
      [
        "\n  mutation newComment(\n    $CommentInput: String! \n    $id: String!\n    ) {\n    newComment(\n      CommentInput: $CommentInput \n      id:$id\n    )\n  }\n",
      ]
    ))
);
exports.TOGGLE_COMMENT_LIKE = graphql_tag_1["default"](
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(
      [
        "\n  mutation toggleCommentLike($commendid: String!){\n    toggleCommentLike(commendid: $commendid)\n  }\n",
      ],
      [
        "\n  mutation toggleCommentLike($commendid: String!){\n    toggleCommentLike(commendid: $commendid)\n  }\n",
      ]
    ))
);
exports.COMMENT_LIKE_COUNTER = graphql_tag_1["default"](
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(
      [
        "\nquery CommentLikeCounter($commentId: String!) {\n  CommentLikeCounter(commentId: $commentId)\n}\n",
      ],
      [
        "\nquery CommentLikeCounter($commentId: String!) {\n  CommentLikeCounter(commentId: $commentId)\n}\n",
      ]
    ))
);
exports.COMMENT_REPLY = graphql_tag_1["default"](
  templateObject_16 ||
    (templateObject_16 = __makeTemplateObject(
      [
        "\n  mutation CommentReply(\n    $CommentInput: String! \n    $id: String!\n    ) {\n    CommentReply(\n      CommentInput: $CommentInput \n      id:$id\n    )\n  }\n",
      ],
      [
        "\n  mutation CommentReply(\n    $CommentInput: String! \n    $id: String!\n    ) {\n    CommentReply(\n      CommentInput: $CommentInput \n      id:$id\n    )\n  }\n",
      ]
    ))
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15,
  templateObject_16;
