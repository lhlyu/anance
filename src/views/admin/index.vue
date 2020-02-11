<template>
    <div class="an-admin">
        <Layout style="height:100vh;" class="an-glass">
            <HHeader>
                <Row justify="center">
                    <Cell :width="2" class="primary-color">
                        <h1>Anance</h1>
                    </Cell>

                    <Cell :width="2" style="float: right;margin-right: 50px">
                        <DropdownCustom :toggle-icon="false" class-name="h-text-dropdown" trigger="hover">
                            <span>Lv9.谕℃</span>
                            <div slot="content" v-width="160">
                                <div v-padding="20">
                                    <img :width="80" :height="80" style="border-radius:80px;float:left" src="https://portrait.gitee.com/uploads/avatars/user/585/1757827_lhlyu_1578959298.png!avatar100">
                                    <div style="height:80px;margin-left:90px;line-height:80px;">Lhlyu</div>
                                </div>
                                <Row style="line-height:40px;border-top:1px solid #EEE;">
                                    <Cell width=12 class="text-center" style="border-right:1px solid #EEE;">
                                        <a>个人中心</a>
                                    </Cell>
                                    <Cell width=12 class="text-center">
                                        <router-link to="/">注销</router-link>
                                    </Cell>
                                </Row>
                            </div>
                        </DropdownCustom>
                    </Cell>
                </Row>
            </HHeader>
            <Layout class="an-glass">
                <Sider>
                    <Menu accordion className="h-menu-white an-glass" :datas="menuItems" ref="menu" @select="menuSelectHandler"></Menu>
                </Sider>
                <Content class="an-glass" style="padding: 16px">
                    <div style="min-height: calc(100vh - 145px)">
                        <keep-alive>
                            <transition name="fade">
                                <router-view></router-view>
                            </transition>
                        </keep-alive>
                    </div>
                    <HFooter class="text-center">Copyright © 2020
                        <a href="http://www.ch-un.com" target="_blank">Lhlyu</a>
                    </HFooter>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>


    export default {
        components:{
        },
        data() {
            return {
                src: 'https://i1.go2yd.com/image.php?url=0Kvq81cKR1',
                param: [{ title: '测试1', key: 'test1' }, { title: '测试2', key: 'test2' }, { title: '测试3', key: 'test3' }],
                menuItems:[{
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
                        title: "统计数据",
                        key: "admin.stat",
                        href: "/admin/stat"
                    },{
                        title: "操作日志",
                        key: "admin.log",
                        href: "/admin/log"
                    }]
                }]
            };
        },
        methods:{
            select(key) {
                this.$refs.menu.select(key);
            },
            menuSelectHandler(menu){
                console.log(menu)
            }
        }
    };
</script>

<style lang="scss">
    .an-admin{
        width: 100%;
        min-height: 100vh;
        position: relative;
        top: 0;
        left: 0;
        .h-layout {
            background: #f0f2f5;
        }
        .h-layout-header {
            padding: 0 25px;
        }
        .h-layout-footer {
            padding: 24px 50px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
        }
    }
</style>