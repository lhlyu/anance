<template>
    <div class="an-admin">
        <Layout style="min-height:100vh;">
            <HHeader>
                <Row justify="center">
                    <Cell :width="2" class="primary-color">
                        <h1>Anance</h1>
                    </Cell>

                    <Cell :width="3" style="float: right;margin-right: 50px">
                        <DropdownCustom :toggle-icon="false" class-name="h-text-dropdown" trigger="hover">
                            <Nameplate :data="$user"></Nameplate>
                            <div slot="content" v-width="160">
                                <div v-padding="20">
                                    <img :width="80" :height="80" style="border-radius:80px;float:left" :src="$user.avatar">
                                    <div style="height:80px;margin-left:90px;line-height:80px;">{{$user.name}}</div>
                                </div>
                                <Row style="line-height:40px;border-top:1px solid #EEE;">
                                    <Cell width=12 class="text-center" style="border-right:1px solid #EEE;">
                                        <router-link to="/admin/profile">个人中心</router-link>
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
            <Layout>
                <Sider>
                    <Menu accordion className="h-menu-white" :datas="menuItems" ref="menu" @select="menuSelectHandler"></Menu>
                </Sider>
                <Content class="an-glass" style="padding: 16px">
                    <div style="min-height: calc(100vh - 180px)">
                        <keep-alive>
                            <transition name="v">
                                <router-view></router-view>
                            </transition>
                        </keep-alive>
                    </div>
                    <HFooter class="text-center">Copyright © 2020
                        <a :href="$author.url" class="primary-color" target="_blank">{{$author.name}}</a>
                    </HFooter>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>


    import Nameplate from '@/components/nameplate'

    export default {
        components:{
            Nameplate
        },
        data() {
            return {
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
                        title: "操作日志",
                        key: "admin.record",
                        href: "/admin/record"
                    },{
                        title: "网站设置",
                        key: "admin.setting",
                        href: "/admin/setting"
                    }]
                }]
            };
        },
        watch:{
            // 监视路由变动修改到指定的菜单
            $route(to,from){
                this.select(to)
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.select(this.$route)
            })
        },
        methods:{
            select(to) {
                for(let m of this.menuItems){
                    if(m.href && m.href == to.path){
                        this.$refs.menu.select(m.key)
                        return
                    }
                    if(m.children && m.children.length > 0){
                        for(let c of m.children){
                            if(c.href && c.href == to.path){
                                this.$refs.menu.select(c.key)
                                return
                            }
                        }
                    }
                }

            },
            menuSelectHandler(menu){
                this.$router.push(menu.href)
            }
        },

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
