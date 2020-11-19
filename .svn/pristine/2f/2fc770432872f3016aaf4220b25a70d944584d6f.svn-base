<template>
    <div id="vehicleUnitDetail">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" labelPosition="top">
            <info-item title="基本信息">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="车辆单位名称" prop="name" class="form-item">
                            <el-input v-model="ruleForm.name" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="经营地址" prop="addr" class="form-item">
                            <el-input v-model="ruleForm.addr" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系电话" prop="phone" class="form-item">
                            <el-input v-model="ruleForm.phone" placeholder="请输入" maxlength="11"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="邮政编码" prop="zipcode" class="form-item">
                            <el-input v-model="ruleForm.zipcode" placeholder="请输入" maxlength="6"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="传真" prop="fax" class="form-item">
                            <el-input v-model="ruleForm.fax" placeholder="请输入" maxlength="25"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="电子邮箱" prop="email" class="form-item">
                            <el-input v-model="ruleForm.email" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </info-item>
        </el-form>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button @click="goBack">返 回</el-button>
            <el-button type="primary" @click="save">保 存</el-button>
        </bread-foot>
    </div>
</template>

<script>
import InfoItem from '@/components/InfoItem'
import BreadFoot from '@/components/BreadFoot.vue'
export default {
    name: 'vehicleUnitDetail',
    data () {
        return {
            breadArr: [
                { title: '业务操作', path: '' }, { title: '车辆单位', path: '' }, { title: '详情', path: '' }
            ],
            ruleForm: {
                name: '',
                username: '',
                password: 'Ycxc2020',
                email: '',
                phone: ''
            },
            rules: {
                name: { required: true, message: '请输入车辆单位名称', trigger: 'blur' },
                phone: this.$validate({ required: false, type: 'phone' }),
                email: this.$validate({ required: false, type: 'email' }),
                username: { required: true, message: '请输入用户名', trigger: 'blur' },
                password: { required: true, message: '请输入', trigger: 'blur' }
            }
        }
    },
    components: {
        InfoItem,
        BreadFoot
    },
    methods: {
        goBack () {
            this.$router.push('/vehicleUnit')
        },
        save () {
            this.$refs.ruleForm.validate((valid) => {
                if (!valid) {
                    return
                }
                this.$message.success('保存成功')
                this.$router.push('/vehicleUnit')
            })
        }
    }
}
</script>

<style lang='less' scoped>
#vehicleUnitDetail {
    .form-item {
        width: 80%;
    }
    .tips {
        color: #999;
    }
}
</style>
