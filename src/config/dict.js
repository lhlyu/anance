
// 私密等级
const secretDict = {
    1:"所有人可见",
    2:"仅好友可见",
    3:"仅自己可见"
}

// 用户状态
const userStatusDict = {
    1:"正常",
    2:"黑名单",
    3:"已删除",
}

// 用户类型
const userKindDict = {
    1:"普通",
    2:"好友"
}

// 日志类型
const recordKindDict = {
    1:"全站访问",
    2:"文章访问",
    3:"文章评论",
    4:"文章点赞",
    5:"评论点赞",
    6:"用户登陆",
    7:"后台操作",
    8:"异常报错",
    9:"其他"
}
const recordKindArray = Object.values(recordKindDict)

// 评论类型
const commentKindDict = {
    1:"评论",
    2:"回复"
}

// 评论状态
const commentStatusDict = {
    1:"未审核",
    2:"已审核",
    3:"禁止",
    4:"删除"
}

export default {
    secretDict,
    userStatusDict,
    userKindDict,
    recordKindDict,
    recordKindArray,
    commentKindDict,
    commentStatusDict,
}
