<script setup>
// 导入必要的依赖
import { useCartStore } from '@/stores/cartStore'
import { RouterLink } from 'vue-router'
import { ElCheckbox, ElInputNumber, ElPopconfirm, ElEmpty, ElButton } from 'element-plus'

// 初始化购物车Store
const cartStore = useCartStore()

// 单选回调：修改单个商品的选中状态
const singleCheck = (i, selected) => {
    console.log('单选商品：', i.skuId, '选中状态：', selected)
    // 调用store的单选方法，传入skuId和选中状态
    cartStore.singleCheck(i.skuId, selected)
}

// 全选回调：修改所有商品的选中状态
const allCheck = (selected) => {
    console.log('全选状态：', selected)
    cartStore.allCheck(selected)
}

// 删除购物车商品
const delCart = (item) => {
    console.log('删除商品：', item.skuId)
    cartStore.delCart(item.skuId)
}

// 商品数量修改回调（可选：同步更新store）
const handleCountChange = (item) => {
    console.log('商品数量修改：', item.skuId, '数量：', item.count)
    cartStore.updateCount(item.skuId, item.count)
}
</script>

<template>
    <div class="xtx-cart-page">
        <div class="container m-top-20">
            <div class="cart">
                <table>
                    <thead>
                        <tr>
                            <th width="120">
                                <el-checkbox :model-value="cartStore.isAll" @change="allCheck" />
                            </th>
                            <th width="400">商品信息</th>
                            <th width="220">单价</th>
                            <th width="180">数量</th>
                            <th width="180">小计</th>
                            <th width="140">操作</th>
                        </tr>
                    </thead>
                    <!-- 商品列表 -->
                    <tbody>
                        <tr v-for="i in cartStore.cartList" :key="i.id">
                            <td>
                                <!-- 单选框 -->
                                <el-checkbox :model-value="i.selected"
                                    @change="(selected) => singleCheck(i, selected)" />
                            </td>
                            <td>
                                <div class="goods">
                                    <RouterLink to="/"><img :src="i.picture" alt="" /></RouterLink>
                                    <div>
                                        <p class="name ellipsis">
                                            {{ i.name }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="tc">
                                <p>¥{{ i.price }}</p>
                            </td>
                            <td class="tc">
                                <el-input-number v-model="i.count" @change="handleCountChange(i)" />
                            </td>
                            <td class="tc">
                                <p class="f16 red">¥{{ (i.price * i.count).toFixed(2) }}</p>
                            </td>
                            <td class="tc">
                                <p>
                                    <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消"
                                        @confirm="delCart(i)">
                                        <template #reference>
                                            <a href="javascript:;">删除</a>
                                        </template>
                                    </el-popconfirm>
                                </p>
                            </td>
                        </tr>
                        <tr v-if="cartStore.cartList.length === 0">
                            <td colspan="6">
                                <div class="cart-none">
                                    <el-empty description="购物车列表为空">
                                        <el-button type="primary">随便逛逛</el-button>
                                    </el-empty>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 操作栏 -->
            <div class="action">
                <div class="batch">
                    共 {{ cartStore.allCount }} 件商品，已选择 {{ cartStore.selectedCount }} 件，商品合计：
                    <span class="red">¥ {{ cartStore.selectedPrice.toFixed(2) }} </span>
                </div>
                <div class="total">
                    <el-button size="large" type="primary" @click="$router.push('/checkout')">下单结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 定义样式中用到的SCSS变量（避免编译报错）
$xtxColor: #1dc078; // 绿色主题色
$priceColor: #cf4444; // 价格红色

.xtx-cart-page {
    margin-top: 20px;

    .cart {
        background: #fff;
        color: #666;

        table {
            border-spacing: 0;
            border-collapse: collapse;
            line-height: 24px;

            th,
            td {
                padding: 10px;
                border-bottom: 1px solid #f5f5f5;

                &:first-child {
                    text-align: left;
                    padding-left: 30px;
                    color: #999;
                }
            }

            th {
                font-size: 16px;
                font-weight: normal;
                line-height: 50px;
            }
        }
    }

    .cart-none {
        text-align: center;
        padding: 120px 0;
        background: #fff;

        p {
            color: #999;
            padding: 20px 0;
        }
    }

    .tc {
        text-align: center;

        a {
            color: $xtxColor;
        }

        .xtx-numbox {
            margin: 0 auto;
            width: 120px;
        }
    }

    .red {
        color: $priceColor;
    }

    .green {
        color: $xtxColor;
    }

    .f16 {
        font-size: 16px;
    }

    .goods {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover; // 补充：防止图片变形
        }

        >div {
            width: 280px;
            font-size: 16px;
            padding-left: 10px;

            .attr {
                font-size: 14px;
                color: #999;
            }
        }
    }

    .action {
        display: flex;
        background: #fff;
        margin-top: 20px;
        height: 80px;
        align-items: center;
        font-size: 16px;
        justify-content: space-between;
        padding: 0 30px;

        .xtx-checkbox {
            color: #999;
        }

        .batch {
            a {
                margin-left: 20px;
            }
        }

        .red {
            font-size: 18px;
            margin-right: 20px;
            font-weight: bold;
        }
    }

    .tit {
        color: #666;
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
    }
}
</style>