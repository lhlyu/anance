
// 菜单
const menu = [{
                    title: "仪表板",
                    key: "admin.board",
                    icon: "h-icon-home",
                    href: "/admin"
                },{
                    title: "个人中心",
                    key: "admin.profile",
                    icon: "h-icon-user",
                    href: "/admin/profile"
                },{
                    title: "权限管理",
                    key: "admin.permission",
                    icon: "h-icon-complete",
                    href: "/admin/permission"
                },{
                    title: "用户中心",
                    key: "admin.users",
                    icon: "h-icon-users",
                    href: "/admin/users"
                },{
                    title: "文章管理",
                    key: "admin.article",
                    icon: "h-icon-edit",
                    children: [{
                        title: "文章列表",
                        key: "admin.articles",
                        href: "/admin/articles"
                    },{
                        title: "文章创作",
                        key: "admin.create",
                        href: "/admin/create"
                    },{
                        title: "标签管理",
                        key: "admin.tag",
                        href: "/admin/tag"
                    },{
                        title: "分类管理",
                        key: "admin.category",
                        href: "/admin/category"
                    }]
                },{
                    title: "评论管理",
                    key: "admin.comment",
                    icon: "h-icon-message",
                    href: "/admin/comment"
                },{
                    title: "网站管理",
                    key: "admin.website",
                    icon: "h-icon-setting",
                    children: [{
                        title: "操作日志",
                        key: "admin.record",
                        href: "/admin/record"
                    },{
                        title: "网站设置",
                        key: "admin.setting",
                        href: "/admin/setting"
                    }]
                }]

export default {
    menu
}
