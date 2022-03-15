"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
var react_1 = require("react");
var homePost_1 = require("../../../../graphql/mutattions/homePost");
var homePost_2 = require("../../../../graphql/mutattions/homePost");
var queries_1 = require("../../../../graphql/queries");
var homepostQuery_1 = require("../../../../graphql/Queries/homepostQuery");
var ReplyDetail_1 = require("./ReplyDetail");
var CommentDetail = function (_a) {
    var _b;
    var item = _a.item, followerCount = _a.followerCount, userImageurl = _a.userImageurl;
    var _c = react_1.useState(""), commentAction = _c[0], setCommentAction = _c[1];
    var _d = react_1.useState([]), reply = _d[0], setReply = _d[1];
    var _e = react_1.useState(""), addReply = _e[0], setAddReply = _e[1];
    var _f = react_1.useState(false), toggleShowMore = _f[0], setToggleShowMore = _f[1];
    var _g = react_1.useState("0"), CommentLikeCounter = _g[0], setCommentLikeCounter = _g[1];
    var _h = react_1.useState(""), userAvater = _h[0], setUserAvater = _h[1];
    var getUserProfileQuery = client_1.useQuery(queries_1.GET_USER_PROFILE_QUERY);
    var commentLikeCounterData = client_1.useQuery(homePost_1.COMMENT_LIKE_COUNTER, {
        variables: {
            commentId: item === null || item === void 0 ? void 0 : item.id
        }
    });
    var toggleCommentMuation = client_1.useMutation(homePost_2.TOGGLE_COMMENT_LIKE, {
        refetchQueries: [
            {
                query: homePost_1.COMMENT_LIKE_COUNTER,
                variables: {
                    commentId: item === null || item === void 0 ? void 0 : item.id
                }
            },
        ]
    });
    var commentReplyRefreshQuery = client_1.useQuery(homepostQuery_1.COMMENT_REPLY_REFRESH_QUERY, {
        variables: {
            commentid: item === null || item === void 0 ? void 0 : item.id
        }
    });
    var commentReplyMuation = client_1.useMutation(homePost_1.COMMENT_REPLY, {
        refetchQueries: [
            {
                query: homepostQuery_1.COMMENT_REPLY_REFRESH_QUERY,
                variables: {
                    commentid: item === null || item === void 0 ? void 0 : item.id
                }
            },
        ]
    });
    var commentReplyM = commentReplyMuation[0];
    var toggleCommentM = toggleCommentMuation[0];
    react_1.useEffect(function () {
        var _a, _b;
        if ((_a = commentLikeCounterData === null || commentLikeCounterData === void 0 ? void 0 : commentLikeCounterData.data) === null || _a === void 0 ? void 0 : _a.CommentLikeCounter) {
            setCommentLikeCounter((_b = commentLikeCounterData === null || commentLikeCounterData === void 0 ? void 0 : commentLikeCounterData.data) === null || _b === void 0 ? void 0 : _b.CommentLikeCounter);
        }
    }, [(_b = commentLikeCounterData === null || commentLikeCounterData === void 0 ? void 0 : commentLikeCounterData.data) === null || _b === void 0 ? void 0 : _b.CommentLikeCounter]);
    react_1.useEffect(function () {
        var _a, _b;
        if ((_a = commentReplyRefreshQuery === null || commentReplyRefreshQuery === void 0 ? void 0 : commentReplyRefreshQuery.data) === null || _a === void 0 ? void 0 : _a.CommentReplyRefreshQuery) {
            setReply((_b = commentReplyRefreshQuery === null || commentReplyRefreshQuery === void 0 ? void 0 : commentReplyRefreshQuery.data) === null || _b === void 0 ? void 0 : _b.CommentReplyRefreshQuery);
        }
    }, [commentReplyRefreshQuery === null || commentReplyRefreshQuery === void 0 ? void 0 : commentReplyRefreshQuery.data]);
    var getWordCount = function (v) {
        var matches = v.match(/[\w\d\’\'-]+/gi);
        console.log('word', matches.length);
        return matches ? matches.length : 0;
    };
    var shorten = function (text, max) {
        return text && getWordCount(text) > max ? text.split(' ').slice(0, max).join(' ') : text;
    };
    var onCommentLikeHandler = function (id) {
        toggleCommentM({
            variables: {
                commendid: id
            }
        })
            .then(function (res) {
            setCommentAction("like");
        })["catch"](function (err) {
            console.log(err.message);
        });
    };
    var onCommentReplyHandler = function (e, id) {
        if (e.keyCode === 13) {
            commentReplyM({
                variables: {
                    id: id,
                    CommentInput: addReply
                }
            })
                .then(function (res) {
                setAddReply("");
                setCommentAction("");
            })["catch"](function (err) {
                console.log(err.message);
            });
        }
    };
    react_1.useEffect(function () {
        var _a, _b, _c;
        if ((_a = getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data) === null || _a === void 0 ? void 0 : _a.getUserProfile) {
            setUserAvater((_c = (_b = getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data) === null || _b === void 0 ? void 0 : _b.getUserProfile) === null || _c === void 0 ? void 0 : _c.profileImage);
        }
    }, [getUserProfileQuery === null || getUserProfileQuery === void 0 ? void 0 : getUserProfileQuery.data]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dApp-post-comment-sect" },
            react_1["default"].createElement("div", { className: "dApp-post-commenter-img" },
                react_1["default"].createElement("img", { src: (item === null || item === void 0 ? void 0 : item.profileImage) !== null ? item === null || item === void 0 ? void 0 : item.profileImage : "/images/comm-usr-img5.png", alt: "dp", className: "img-fluid", style: { borderRadius: '50px', width: "48px", height: "48px" } })),
            react_1["default"].createElement("div", { className: "dApp-post-comment-right" },
                react_1["default"].createElement("div", { className: "daap-home-post-commnt" },
                    react_1["default"].createElement("div", { className: "dApp-post-comment-text" },
                        react_1["default"].createElement("h1", null, item === null || item === void 0 ? void 0 : item.userName),
                        react_1["default"].createElement("h2", null,
                            followerCount ? followerCount : '0',
                            " followers"),
                        toggleShowMore == false && getWordCount(item === null || item === void 0 ? void 0 : item.text) > 25 ?
                            react_1["default"].createElement("p", null,
                                shorten(item === null || item === void 0 ? void 0 : item.text, 20),
                                " ...",
                                react_1["default"].createElement("a", { className: "blue-color", onClick: function () { return setToggleShowMore(true); } }, "see more"))
                            :
                                react_1["default"].createElement("p", null, item === null || item === void 0 ? void 0 : item.text),
                        react_1["default"].createElement("div", { className: "dApp-post-3dots dropdown" },
                            react_1["default"].createElement("a", { href: "#", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                react_1["default"].createElement("img", { src: "/images/dApp-ThreeDots.png", alt: "3dots", className: "img-fluid post-threedots" }),
                                react_1["default"].createElement("img", { src: "/images/ThreeDots-active.png", alt: "3dots", className: "img-fluid post-threedots-active" })),
                            react_1["default"].createElement("div", { className: "dropdown-menu home-drop-postStatus" },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: "" },
                                        react_1["default"].createElement("a", { className: "", href: "#" },
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block" },
                                                react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                                    react_1["default"].createElement("img", { src: "/images/copy.png", alt: "copy", className: "img-fluid" })),
                                                react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                                    react_1["default"].createElement("h4", null, "Copy link to comment"))))),
                                    react_1["default"].createElement("li", { className: "" },
                                        react_1["default"].createElement("a", { className: "", href: "#" },
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block" },
                                                react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                                    react_1["default"].createElement("img", { src: "/images/report.png", alt: "report", className: "img-fluid" })),
                                                react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                                    react_1["default"].createElement("h3", null, "Report this post"),
                                                    react_1["default"].createElement("p", null, "This comment is offensive or the account is hacked"))))))))),
                    react_1["default"].createElement("div", { className: "dApp-like-and-reply-btn daap-home-post-cmnt-btn" },
                        react_1["default"].createElement("ul", null,
                            react_1["default"].createElement("li", { className: "like", onClick: function () { return onCommentLikeHandler(item === null || item === void 0 ? void 0 : item.id); } },
                                "Like",
                                react_1["default"].createElement("div", { className: "dApp-status-react-icon" },
                                    react_1["default"].createElement("span", null,
                                        react_1["default"].createElement("img", { src: "/images/like.png", alt: "icon", className: "img-fluid" }))),
                                react_1["default"].createElement("span", { className: "dapp-home-post-like-count" }, CommentLikeCounter)),
                            react_1["default"].createElement("li", { className: "reply active", onClick: function () { return setCommentAction("reply"); } },
                                "Reply",
                                " ")))),
                commentAction == "reply" &&
                    react_1["default"].createElement("div", { className: "dApp-post-comment-writing-sect" },
                        react_1["default"].createElement("div", { className: "dApp-post-comment-input-sect" },
                            react_1["default"].createElement("div", { className: "dApp-post-commenter-img" },
                                react_1["default"].createElement("img", { src: userAvater !== null ? userAvater : "/images/comm-usr-img5.png", alt: "dp", className: "img-fluid", style: { borderRadius: '50px', width: "48px", height: "48px" } }))),
                        react_1["default"].createElement("div", { className: "dApp-post-comment-input-fild" },
                            react_1["default"].createElement("textarea", { value: addReply, className: "add-comment-box", onChange: function (e) { return setAddReply(e.target.value); }, onKeyDown: function (e) { return onCommentReplyHandler(e, item === null || item === void 0 ? void 0 : item.id); }, id: "", placeholder: "Add a comment" }),
                            react_1["default"].createElement("div", { className: "dApp-post-comment-emoje-and-gallery" },
                                react_1["default"].createElement("img", { src: "images/emoji-icon.png", alt: "", className: "img-fluid" }),
                                react_1["default"].createElement("span", { className: "position-relative" },
                                    react_1["default"].createElement("input", { type: "file", className: "home-post-file-uplod" }),
                                    react_1["default"].createElement("img", { src: "/images/dAppgallery.png", alt: "", className: "img-fluid" }))))),
                (reply === null || reply === void 0 ? void 0 : reply.length) > 0
                    ? reply === null || reply === void 0 ? void 0 : reply.map(function (item, index) {
                        return react_1["default"].createElement(ReplyDetail_1["default"], { item: item, followerCount: followerCount });
                    }) : ""))));
};
exports["default"] = CommentDetail;
