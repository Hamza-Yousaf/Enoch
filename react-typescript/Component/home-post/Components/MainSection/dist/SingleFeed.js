"use strict";
//@ts-nocheck
exports.__esModule = true;
var react_1 = require("react");
var CommentBox_1 = require("./CommentBox");
var React_1 = require("./React");
var Reactions_1 = require("./Reactions");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var index_1 = require("../../../../state/index");
var react_player_1 = require("react-player");
var ssr_1 = require("@apollo/client/react/ssr");
var withApollo_1 = require("../../../../lib/withApollo");
var EventManageCard_1 = require("../Events/Manage/EventManageCard");
var date_fns_1 = require("date-fns");
var SingleFeed = function (_a) {
    var _b, _c, _d;
    var post = _a.post;
    // console.log(post);
    var _e = react_1.useState(false), addAComment = _e[0], setAddAComment = _e[1];
    var _f = react_1.useState(false), openPostOptions = _f[0], setOpenPostOptions = _f[1];
    var togglePostOptions = function () {
        setOpenPostOptions(!openPostOptions);
    };
    var dispatch = react_redux_1.useDispatch();
    var _g = redux_1.bindActionCreators(index_1.actionCreators, dispatch), showSavedPostAlert = _g.showSavedPostAlert, showCopyLinkAlert = _g.showCopyLinkAlert, showReportPostAlert = _g.showReportPostAlert;
    var showSavedPostAlertValue = react_redux_1.useSelector(function (state) { return state.showSavedPostAlert; });
    var savePost = function () {
        showSavedPostAlert(true);
        setOpenPostOptions(false);
    };
    var copyPostLink = function () {
        showCopyLinkAlert(true);
        setOpenPostOptions(false);
    };
    var reportPost = function () {
        showReportPostAlert(true);
        setOpenPostOptions(false);
    };
    var datePosted = function () {
        if (post === null || post === void 0 ? void 0 : post.createdAt) {
            return " " + date_fns_1.format(new Date(post === null || post === void 0 ? void 0 : post.createdAt), "LLLL") + " " + date_fns_1.format(new Date(post === null || post === void 0 ? void 0 : post.createdAt), "d");
        }
    };
    return (react_1["default"].createElement("div", { className: "dApp-status-block mb-16" },
        react_1["default"].createElement("div", { className: "dApp-status-heading" },
            react_1["default"].createElement("div", { className: "dApp-status-heading-profile-pic" },
                react_1["default"].createElement("img", { src: post.user.profileImage, alt: "DP", className: "img-fluid rounded-circle" })),
            react_1["default"].createElement("div", { className: "dApp-status-heading-text" },
                react_1["default"].createElement("h1", null, post.user.userName),
                react_1["default"].createElement("h2", null,
                    " ",
                    EventManageCard_1.truncateString((_b = post === null || post === void 0 ? void 0 : post.user) === null || _b === void 0 ? void 0 : _b.bio, 85)),
                react_1["default"].createElement("h3", null,
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement("img", { src: "/images/Clock.png", alt: "icon", className: "img-fluid" })),
                    datePosted())),
            react_1["default"].createElement("div", { className: openPostOptions
                    ? "dApp-post-3dots dropdown open"
                    : "dApp-post-3dots dropdown" },
                react_1["default"].createElement("a", { href: "#", onClick: togglePostOptions }, openPostOptions ? (react_1["default"].createElement("img", { src: "/images/ThreeDots-active.png", alt: "3dots", className: "img-fluid post-threedots-active" })) : (react_1["default"].createElement("img", { src: "/images/dApp-ThreeDots.png", alt: "3dots", className: "img-fluid post-threedots" }))),
                react_1["default"].createElement("div", { className: "dropdown-menu home-drop-postStatus" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { className: "" },
                            react_1["default"].createElement("a", { className: "", href: "#" },
                                react_1["default"].createElement("div", { className: "drop-postStatus-block", onClick: savePost },
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                        react_1["default"].createElement("img", { src: "/images/post-save.png", alt: "save", className: "img-fluid" })),
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                        react_1["default"].createElement("h3", null, "Save"),
                                        react_1["default"].createElement("p", null, "Save for later"))))),
                        react_1["default"].createElement("li", { className: "" },
                            react_1["default"].createElement("a", { className: "", href: "#" },
                                react_1["default"].createElement("div", { className: "drop-postStatus-block", onClick: copyPostLink },
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                        react_1["default"].createElement("img", { src: "/images/copy.png", alt: "copy", className: "img-fluid" })),
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                        react_1["default"].createElement("h4", null, "Copy link to post"))))),
                        react_1["default"].createElement("li", { className: "" },
                            react_1["default"].createElement("a", { className: "", href: "#" },
                                react_1["default"].createElement("div", { className: "drop-postStatus-block", onClick: reportPost },
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                        react_1["default"].createElement("img", { src: "/images/report.png", alt: "report", className: "img-fluid" })),
                                    react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                        react_1["default"].createElement("h3", null, "Report this post"),
                                        react_1["default"].createElement("p", null, "This post is offensive or the account is hacked"))))))))),
        post.url.length > 0 ? (react_1["default"].createElement("div", { className: "dApp-status-caption-sect" },
            react_1["default"].createElement("p", { className: "mb-2", dangerouslySetInnerHTML: {
                    __html: post.text
                } }),
            react_1["default"].createElement("div", { className: "d-flex flex-row justify-content-center" },
                react_1["default"].createElement(react_player_1["default"], { url: post.url, muted: true, width: "600px", height: "400px", playing: false, controls: true })))) : post.imageurl.length > 0 ? (react_1["default"].createElement("div", { className: "dApp-status-caption-sect" },
            react_1["default"].createElement("p", { className: "mb-2", dangerouslySetInnerHTML: {
                    __html: post.text
                } }),
            react_1["default"].createElement("img", { src: post.imageurl, alt: "image", className: "img-fluid" }))) : (react_1["default"].createElement("div", { className: "dApp-status-caption-sect" },
            react_1["default"].createElement("p", { dangerouslySetInnerHTML: {
                    __html: post.text
                } }))),
        react_1["default"].createElement(Reactions_1["default"]
        //@ts-ignore
        , { 
            //@ts-ignore
            postid: post.id }),
        react_1["default"].createElement(React_1["default"]
        //@ts-ignore
        , { 
            //@ts-ignore
            setAddAComment: setAddAComment, postid: post.id }),
        addAComment && react_1["default"].createElement(CommentBox_1["default"], { postid: post.id, followerCount: (_c = post === null || post === void 0 ? void 0 : post.user) === null || _c === void 0 ? void 0 : _c.followerCount, imageurl: (_d = post === null || post === void 0 ? void 0 : post.user) === null || _d === void 0 ? void 0 : _d.profileImage })));
};
exports["default"] = withApollo_1["default"](SingleFeed, { getDataFromTree: ssr_1.getDataFromTree });
