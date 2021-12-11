<template>
  <div class="w">
    <el-row align="middle">
      <el-col :push="1" :span="6" class="title">
        <a href="/">Chaoer的博客</a>
      </el-col>
      <el-col :push="4" :span="16">
        <el-menu
          :default-active="data.activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#c15b56"
          :router="true"
        >
          <el-menu-item index="/home">
            <el-icon>
              <price-tag />
            </el-icon>
            <span>博客首页</span>
          </el-menu-item>
          <el-menu-item index="/lists">
            <el-icon>
              <document />
            </el-icon>
            <span>技术博文</span>
          </el-menu-item>
          <el-menu-item index="/leaveWord">
            <el-icon>
              <edit />
            </el-icon>
            <span>留言</span>
          </el-menu-item>
          <el-menu-item index="/aboutMe">
            <el-icon>
              <user />
            </el-icon>
            <span>关于我</span>
          </el-menu-item>
          <div class="group" v-if="!data.showuser && !data.token">
            <el-button-group>
              <el-button
                :icon="Avatar"
                size="mini"
                color="#b47c6f"
                plain
                round
                @click="clickShowRegister"
              >注册</el-button>
              <el-button
                :icon="Notification"
                size="mini"
                color="#c15b56"
                plain
                round
                @click="clickShowLogin"
              >登录</el-button>
            </el-button-group>
          </div>
          <div class="group_else" v-else>
            <el-popover trigger="hover" placement="bottom" :width="40">
              <div class="else_btn">
                <el-button
                  plain
                  :icon="Notification"
                  size="mini"
                  color="#b47c6f"
                  round
                  @click="nextLogin"
                >退出登录</el-button>
              </div>
              <template #reference>
                <el-button
                  plain
                  :icon="Avatar"
                  size="mini"
                  color="#b47c6f"
                  round
                >{{ data.loginData.name }}</el-button>
              </template>
            </el-popover>
          </div>
          <!-- 注册表 -->
          <div class="register">
            <el-dialog
              width="15%"
              v-model="data.showRegister"
              :show-close="false"
              @open="opendialog"
            >
              <template #title>
                <div class="register_title">注册</div>
              </template>
              <el-form ref="registerForm" :model="data.registerData" :rules="data.registerRules">
                <el-form-item prop="name">
                  <el-input placeholder="用户名" v-model="data.registerData.name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input placeholder="密码" v-model="data.registerData.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button plain color="#c15b56" @click="submitRegisterFrom">确定注册</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>
          <!-- 登录表 -->
          <div class="login">
            <el-dialog
              width="15%"
              v-model="store.state.showLogin"
              :show-close="false"
              @open="opendialog"
            >
              <template #title>
                <div class="login_title">登录</div>
              </template>
              <el-form ref="LoginForm" :model="data.loginData" :rules="data.loginRules">
                <el-form-item prop="name">
                  <el-input placeholder="用户名" v-model="data.loginData.name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    placeholder="密码"
                    :show-password="true"
                    v-model="data.loginData.password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button plain color="#c15b56" @click="submitLoginFrom">确定登录</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { PriceTag, Document, User, Edit, Avatar, Notification } from '@element-plus/icons'
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { register, login, getUserImg } from '../../api/login'
import { ElMessage } from 'element-plus'

//! 定义接口
interface IDataType {
  activeIndex: string,
  showuser: boolean,
  showRegister: boolean,
  showLogin: boolean,
  registerData: any,
  loginData: any,
  registerRules: any,
  loginRules: any,
  token: any
}

//! 数据
const data = reactive<IDataType>({
  activeIndex: '/home',
  showuser: false,
  showRegister: false,
  showLogin: false,
  registerData: {
    name: '',
    password: ''
  },
  loginData: {
    name: '',
    password: ''
  },
  registerRules: {
    name: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 12,
        message: '密码长度在6-12之间',
        trigger: 'blur',
      },
    ],
  },
  loginRules: {
    name: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 12,
        message: '密码长度在6-12之间',
        trigger: 'blur',
      },
    ],
  },
  token: ''
})

//! 使用vuex
const store = useStore()

//! 获取ref
const registerForm = ref<any>(null)
const LoginForm = ref<any>(null)

//! 方法
const clickShowRegister = () => {
  data.showRegister = true
}
const clickShowLogin = () => {
  store.state.showLogin = true
}
const opendialog = () => {
  data.registerData.name = ''
  data.registerData.password = ''
  data.loginData.name = ''
  data.loginData.password = ''
}
const submitRegisterFrom = () => {
  registerForm.value.validate((valid: any) => {
    if (!valid) return
    register(data.registerData.name, data.registerData.password).then(() => {
      ElMessage({
        message: '注册成功',
        type: 'success',
      })
    }).catch(() => {
      ElMessage.error('注册失败')
    })

    data.showRegister = false
  })
}
const submitLoginFrom = () => {
  LoginForm.value.validate((valid: any) => {
    if (!valid) return
    login(data.loginData.name, data.loginData.password).then((res) => {
      store.state.showLogin = false
      window.sessionStorage.setItem('token', res.data.result.token)
      window.sessionStorage.setItem('name', data.loginData.name)
      store.state.userName = window.sessionStorage.getItem('name')
      data.showuser = true
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
      getUserImg(store.state.userName).then((res) => {
        const img = store.state.ImgBaseUrl + res.data.result.user_img
        window.sessionStorage.setItem('img', img)
        store.state.userImg = window.sessionStorage.getItem('img')
      })
    })

  })
}
const nextLogin = () => {
  window.sessionStorage.removeItem('token')
  window.sessionStorage.removeItem('name')
  window.sessionStorage.removeItem('img')
  data.loginData.name = ''
  store.state.userName = ''
  store.state.userImg = ''
  data.token = false
  data.showuser = false
}
//! 生命周期函数
onMounted(() => {
  data.token = window.sessionStorage.getItem('token')
  data.loginData.name = window.sessionStorage.getItem('name')
})
</script>

<style scoped lang="scss">
.el-menu {
  margin-left: 150px;
  border-bottom: 0 !important;
  background-color: rgba(0, 0, 0, 0);
}
.el-menu-item {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #fff !important;
  }
}
.title {
  color: #fff;
  font-size: 33px;
  font-weight: 600;
  text-shadow: 0 3px 6px #c15b56, 0px -2px 1px #fff;
}
.group,
.group_else {
  margin-left: 10px;
  margin-top: 15px;
}
.else_btn {
  display: flex;
  justify-content: center;
}

.register,
.login {
  .register_title,
  .login_title {
    color: #c15b56;
    font-weight: 700;
  }
}
</style>
