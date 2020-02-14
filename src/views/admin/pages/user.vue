<template>
    <div class="an-user">
        <Row>
            <Cell :width="22">
                <Table :datas="datas" :height="400">
                    <TableItem title="姓名" prop="name" ></TableItem>
                    <TableItem title="年龄" prop="age" ></TableItem>
                    <TableItem title="地址" prop="address" align="center" ></TableItem>
                    <TableItem title="姓名" prop="name" ></TableItem>
                    <TableItem title="年龄" prop="age" ></TableItem>
                    <TableItem title="地址" prop="address" align="center" ></TableItem>
                    <TableItem title="姓名" prop="name" ></TableItem>
                    <TableItem title="年龄" prop="age" ></TableItem>
                    <TableItem title="地址" prop="address" align="center" ></TableItem>
                    <TableItem title="操作" fixed="right">
                        <template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-red"><i class="h-icon-trash"></i>
                        </button></template></TableItem>
                    <div slot="empty">自定义提醒：暂时无数据</div>
                </Table>
            </Cell>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return {
                datas: [
                    { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
                    { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
                    { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
                    { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
                    { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
                    { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
                    { id: 5, name: 'test 5', age: 12, address: 'Shanghai' }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>