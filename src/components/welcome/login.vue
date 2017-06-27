<template>
    <div class="login">
        
        <el-form ref="form" :model="form" :rules="loginRule" label-width="80px">
    
            <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="form.pass" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(form)">登陆</el-button>
            </el-form-item>
    
    
        </el-form>
    
    
    </div>
</template>

<script>
    var form = {
        name: '你好啊',
        pass: ''
    }
    export default {
        data() {
            return {
                form: {
                    name: '你好啊',
                    pass: ''
                },
                loginRule: {
                    name: [{
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 5,
                            message: '长度在 3 到 5 个字符',
                            trigger: 'blur'
                        }
                    ],
                    pass: [{
                        required: true,
                        message: '请填写密码',
                        trigger: 'blur'
                    },
                     {
                            min: 6,
                            message: '密码不能小于6个字符',
                            trigger: 'blur'
                    }
                    ]
                }
            }
        },
        methods: {
            onSubmit(loginData) {
                alert(loginData);
                  this.$router.push('/index');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        width: 30%;
        margin-left: 35%;
    }
</style>
