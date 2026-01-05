<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-user"></i>
            用户名
          </a>
        </li>
        <li>
          <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="handleConfirm">
            <template #reference>
              <a href="javascript:;">退出登录</a>
            </template>
          </el-popconfirm>
        </li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// 静态页面，无需路由和store
const handleConfirm = () => {
  console.log('退出登录');
  // 静态页面，这里只是示例，不执行实际操作
};
</script>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
