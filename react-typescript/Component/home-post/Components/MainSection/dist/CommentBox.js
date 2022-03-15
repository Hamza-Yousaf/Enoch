"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ssr_1 = require("@apollo/client/react/ssr");
var withApollo_1 = require("../../../../lib/withApollo");
var client_1 = require("@apollo/client");
var homePost_1 = require("../../../../graphql/mutattions/homePost");
var homepostQuery_1 = require("../../../../graphql/Queries/homepostQuery");
var CommentDetail_1 = require("./CommentDetail");
var queries_1 = require("../../../../graphql/queries");
var CommentBox = function (_a) {
    var postid = _a.postid, followerCount = _a.followerCount, imageurl = _a.imageurl;
    var _b = react_1.useState(""), addComment = _b[0], setAddComment = _b[1];
    var _c = react_1.useState(""), userAvater = _c[0], setUserAvater = _c[1];
    var _d = react_1.useState([]), comments = _d[0], setComments = _d[1];
    var getUserProfileQuery = client_1.useQuery(queries_1.GET_USER_PROFILE_QUERY);
    var commentRefreshQuery = client_1.useQuery(homepostQuery_1.COMMENT_REFRESH_QUERY, {
        variables: {
            PostId: postid
        }
    });
    var newCommentMuation = client_1.useMutation(homePost_1.NEW_COMMENT, {
        refetchQueries: [
            {
                query: homepostQuery_1.COMMENT_COUNTER,
                variables: {
                    postid: postid
                }
            },
            {
                query: homepostQuery_1.COMMENT_REFRESH_QUERY,
                variables: {
                    PostId: postid
                }
            },
        ]
    });
    var newCommentM = newCommentMuation[0];
    var onCommentHandler = function (e, id) {
        if (e.keyCode === 13) {
            newCommentM({
                variables: {
                    id: id,
                    CommentInput: addComment
                }
            })
                .then(function (res) {
                setAddComment("");
            })["catch"](function (err) {
                console.log(err.message);
            });
        }
    };
    react_1.useEffect(function () {
        var _a, _b;
        if ((_a = commentRefreshQuery === null || commentRefreshQuery === void 0 ? void 0 : commentRefreshQuery.data) === null || _a === void 0 ? void 0 : _a.CommentRefreshQuery) {
            setComments((_b = commentRefreshQuery === null || commentRefreshQuery === void 0 ? void 0 : commentRefreshQuery.data) === null || _b === void 0 ? void 0 : _b.CommentRefreshQuery);
        }
    }, [commentRefreshQuery === null || commentRefreshQuery === void 0 ? void 0 : commentRefreshQuery.data]);
    react_1.useEffect(function () {
        var _a, _b, _c;
        if ((_a = getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data) === null || _a === void 0 ? void 0 : _a.getUserProfile) {
            setUserAvater((_c = (_b = getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data) === null || _b === void 0 ? void 0 : _b.getUserProfile) === null || _c === void 0 ? void 0 : _c.profileImage);
        }
    }, [getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data]);
    return (react_1["default"].createElement("div", { className: "dApp-post-comment-box pb-0" },
        react_1["default"].createElement("div", { className: "dApp-post-comment-writing-sect" },
            react_1["default"].createElement("div", { className: "dApp-post-comment-input-sect" },
                react_1["default"].createElement("div", { className: "dApp-post-commenter-img" },
                    react_1["default"].createElement("img", { src: userAvater !== null ? userAvater : "/images/comm-usr-img5.png", alt: "dp", className: "img-fluid", style: { borderRadius: '50px', width: "48px", height: "48px" } }))),
            react_1["default"].createElement("div", { className: "dApp-post-comment-input-fild" },
                react_1["default"].createElement("textarea", { name: "", rows: 1, id: "", placeholder: "Add a comment", value: addComment, onChange: function (e) { return setAddComment(e.target.value); }, onKeyDown: function (e) { return onCommentHandler(e, postid); } }),
                react_1["default"].createElement("div", { className: "dApp-post-comment-emoje-and-gallery" },
                    react_1["default"].createElement("img", { src: "/images/emoji-icon.png", alt: "", className: "img-fluid" }),
                    react_1["default"].createElement("img", { src: "/images/dAppgallery.png", alt: "", className: "img-fluid" })))),
        (comments === null || comments === void 0 ? void 0 : comments.length) > 0 && (react_1["default"].createElement("div", { className: "Most-relevant" },
            react_1["default"].createElement("a", { href: "#" }, "Most relevant"))),
        (comments === null || comments === void 0 ? void 0 : comments.length) > 0
            ? comments === null || comments === void 0 ? void 0 : comments.map(function (item, index) {
                return react_1["default"].createElement(CommentDetail_1["default"], { item: item, followerCount: followerCount, userImageurl: imageurl });
            }) : ""));
};
exports["default"] = withApollo_1["default"](CommentBox, { getDataFromTree: ssr_1.getDataFromTree });
