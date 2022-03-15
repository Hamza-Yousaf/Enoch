"use strict";
exports.__esModule = true;
var react_1 = require("react");
var getWordCount = function (v) {
    var matches = v.match(/[\w\d\’\'-]+/gi);
    console.log("word", matches.length);
    return matches ? matches.length : 0;
};
var shorten = function (text, max) {
    return text && getWordCount(text) > max
        ? text.split(" ").slice(0, max).join(" ")
        : text;
};
var ReplyDetail = function (_a) {
    var item = _a.item, followerCount = _a.followerCount;
    var _b = react_1.useState(false), toggleShowMore = _b[0], setToggleShowMore = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dApp-post-comment-writing-sect2 mb-2" },
            react_1["default"].createElement("div", { className: "dApp-post-comment-input-sect" },
                react_1["default"].createElement("div", { className: "dApp-post-commenter-img" },
                    react_1["default"].createElement("img", { src: (item === null || item === void 0 ? void 0 : item.profileImage) !== null ? item === null || item === void 0 ? void 0 : item.profileImage : "/images/comm-usr-img5.png", alt: "dp", className: "img-fluid", style: { borderRadius: '50px', width: "48px", height: "48px" } }))),
            react_1["default"].createElement("div", { className: "daap-home-post-commnt" },
                react_1["default"].createElement("div", { className: "dApp-post-comment-text" },
                    react_1["default"].createElement("h1", null,
                        " ", item === null || item === void 0 ? void 0 :
                        item.userName),
                    react_1["default"].createElement("h2", null,
                        followerCount ? followerCount : '0',
                        " followers"),
                    toggleShowMore == false && getWordCount(item === null || item === void 0 ? void 0 : item.text) > 25 ? (react_1["default"].createElement("p", null,
                        shorten(item === null || item === void 0 ? void 0 : item.text, 20),
                        " ...",
                        react_1["default"].createElement("a", { className: "blue-color", onClick: function () { return setToggleShowMore(true); } }, "see more"))) : (react_1["default"].createElement("p", null, item === null || item === void 0 ? void 0 : item.text)),
                    react_1["default"].createElement("div", { className: "dApp-post-3dots dropdown" },
                        react_1["default"].createElement("a", { href: "#!", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                            react_1["default"].createElement("img", { src: "/images/dApp-ThreeDots.png", alt: "3dots", className: "img-fluid post-threedots" }),
                            react_1["default"].createElement("img", { src: "/images/dApp-ThreeDots.png", alt: "3dots", className: "img-fluid post-threedots-active" })),
                        react_1["default"].createElement("div", { className: "dropdown-menu home-drop-postStatus" },
                            react_1["default"].createElement("ul", null,
                                react_1["default"].createElement("li", { className: "" },
                                    react_1["default"].createElement("a", { className: "", href: "#!" },
                                        react_1["default"].createElement("div", { className: "drop-postStatus-block" },
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                                react_1["default"].createElement("img", { src: "/images/copy.png", alt: "copy", className: "img-fluid" })),
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                                react_1["default"].createElement("h4", null, "Copy link to comment"))))),
                                react_1["default"].createElement("li", { className: "" },
                                    react_1["default"].createElement("a", { className: "", href: "#!" },
                                        react_1["default"].createElement("div", { className: "drop-postStatus-block" },
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block-lft" },
                                                react_1["default"].createElement("img", { src: "images/report.png", alt: "report", className: "img-fluid" })),
                                            react_1["default"].createElement("div", { className: "drop-postStatus-block-right" },
                                                react_1["default"].createElement("h3", null, "Report this post"),
                                                react_1["default"].createElement("p", null, "This comment is offensive or the account is hacked"))))))))),
                react_1["default"].createElement("div", { className: "dApp-like-and-reply-btn daap-home-post-cmnt-btn" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { className: "like" }, "Like "),
                        react_1["default"].createElement("li", { className: "reply active" }, "Reply ")))))));
};
exports["default"] = ReplyDetail;
