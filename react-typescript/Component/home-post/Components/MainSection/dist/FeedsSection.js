"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dynamic_1 = require("next/dynamic");
var MakePost = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("./MakePost"); }); });
var antd_1 = require("antd");
var SingleFeed = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("./SingleFeed"); }); });
var homepostQuery_1 = require("../../../../graphql/Queries/homepostQuery");
var client_1 = require("@apollo/client");
var withApollo_1 = require("../../../../lib/withApollo");
var ssr_1 = require("@apollo/client/react/ssr");
var js_cookie_1 = require("js-cookie");
var postsCount_1 = require("../../../../graphql/Queries/postsCount");
var InfiniteScroll = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-infinite-scroll-component"); }); });
var FeedsSection = function () {
    var _a, _b;
    var _c = react_1.useState([]), Posts = _c[0], setPosts = _c[1];
    var _d = react_1.useState(0), offset = _d[0], setOffset = _d[1];
    var _e = react_1.useState(0), postCount = _e[0], setPostCount = _e[1];
    var loggedInUser = JSON.parse(js_cookie_1["default"].get("loggedInUser"));
    var postsCountQueryData = client_1.useQuery(postsCount_1.ALL_POSTS_COUNT_QUERY);
    react_1.useEffect(function () {
        var _a;
        if (postsCountQueryData === null || postsCountQueryData === void 0 ? void 0 : postsCountQueryData.data) {
            setPostCount((_a = postsCountQueryData === null || postsCountQueryData === void 0 ? void 0 : postsCountQueryData.data) === null || _a === void 0 ? void 0 : _a.getAllPostCount);
        }
    }, [postsCountQueryData === null || postsCountQueryData === void 0 ? void 0 : postsCountQueryData.data]);
    var postData = client_1.useQuery(homepostQuery_1.POSTS_QUERY, {
        variables: {
            offset: offset,
            limit: 5
        },
        notifyOnNetworkStatusChange: true
    });
    var data = postData.data, loading = postData.loading, error = postData.error, fetchMore = postData.fetchMore;
    react_1.useEffect(function () {
        var _a;
        if (postData) {
            setPosts((_a = postData === null || postData === void 0 ? void 0 : postData.data) === null || _a === void 0 ? void 0 : _a.getAllPost);
        }
    }, [postData.data]);
    var compareFunc = function (a, b) {
        var date1 = /T/.test(a.updatedAt)
            ? new Date(a.updatedAt)
            : new Date(Number(a.updatedAt));
        var date2 = /T/.test(a.updatedAt)
            ? new Date(b.updatedAt)
            : new Date(Number(b.updatedAt));
        return date2 - date1;
    };
    console.log(Posts);
    return (react_1["default"].createElement("div", { className: "home-post-mid" },
        react_1["default"].createElement(MakePost, null),
        (Posts === null || Posts === void 0 ? void 0 : Posts.length) < 1 || Posts === undefined ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }),
            react_1["default"].createElement(antd_1.Skeleton, { active: true }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(InfiniteScroll, { dataLength: (_a = data === null || data === void 0 ? void 0 : data.getAllPost) === null || _a === void 0 ? void 0 : _a.length, next: function () {
                    var _a;
                    fetchMore({
                        variables: {
                            offset: (_a = data.getAllPost) === null || _a === void 0 ? void 0 : _a.length
                        }
                    })
                        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.log(err); });
                }, hasMore: ((_b = data.getAllPost) === null || _b === void 0 ? void 0 : _b.length) < postCount, loader: react_1["default"].createElement("div", { className: "d-flex flex-row justify-content-center" },
                    react_1["default"].createElement(antd_1.Spin, null)), style: {
                    overflow: "hidden"
                } }, Posts === null || Posts === void 0 ? void 0 : Posts.map(function (post, index) {
                //@ts-ignore
                return react_1["default"].createElement(SingleFeed, { key: index, post: post });
            }))))));
};
exports["default"] = withApollo_1["default"](FeedsSection, { getDataFromTree: ssr_1.getDataFromTree });
