//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
// 引入vuex-along
import VueXAlong from 'vuex-along'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {
    //登录检查
    updateLearnToWorkNumber(context,value){
        let err = 3
        let Pertype
        if(value[1] === 9){
            Pertype = context.state.students
        }
        else if(value[1] === 6){
            Pertype = context.state.teachers
        }
        else{
            Pertype = context.state.admin
        }
        for(let i = 0;i < Pertype.length;i++){
            if(Pertype[i].LearnToWorkNumber === Number(value[0]) && Pertype[i].password === value[2]){
                context.state.isErr = true
                context.commit("updateLearnToWorkNumber",Pertype[i])
                err = true
                break
            }
            else{
                context.state.isErr = false
                err = false
            }
        }
        console.log(context.state.isErr);
        if(err === false){
            alert("用户名或密码错误")
        }
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    updateLearnToWorkNumber(state,value){
        state.username = value.name
        state.Person = value
    },
    Permission(state,value){
        state.Permission = value
    },
    changePassword(state,value){
        if(state.Permission === 3){
            for(let i = 0;i < state.admin.length;i++){
                if(state.Person.LearnToWorkNumber === state.admin[i].LearnToWorkNumber){
                    state.admin[i].password = value
                    console.log("密码修改完成",state.admin[i].password,value);
                }
            }
        }
        else if(state.Permission === 6){
            for(let i = 0;i < state.teachers.length;i++){
                if(state.Person.LearnToWorkNumber === state.teachers[i].LearnToWorkNumber){
                    state.teachers[i].password = value
                    console.log("密码修改完成");
                }
            }
        }
        else{
            for(let i = 0;i < state.students.length;i++){
                if(state.Person.LearnToWorkNumber === state.students[i].LearnToWorkNumber){
                    state.students[i].password = value
                    console.log("密码修改完成");
                }
            }
        }
        
    },
    // 表格编辑功能
    redact(state,value){
        if(value.row.Permission === 6){
            state.teachers.splice(value.index,1,value.row)
        }
        else{
            state.students.splice(value.index,1,value.row)
        }
    },
    delete(state,value){
        if(value.row.Permission === 6){
            state.teachers.splice(value.index,1)
        }
        else{
            state.students.splice(value.index,1)
        }
    }
}
//准备state对象——保存具体的数据
const state = {
    // 存储用户名
    username:"",
    // 登录类型
    Permission:"",
    // 是否登录成功
    isErr:"",
    // 个人的所有数据
    Person:"",
    
    students:[{
        Permission:9,
        LearnToWorkNumber:50000000,
        password:"123456",
        name:'misaka',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000001,
        password:"123456",
        name:'伊雷娜',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000002,
        password:"123456",
        name:'和泉纱雾',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000003,
        password:"123456",
        name:'雅儿贝德',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000004,
        password:"123456",
        name:'古河渚',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000005,
        password:"123456",
        name:'宫园熏',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000006,
        password:"123456",
        name:'克鲁鲁',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
    {
        Permission:9,
        LearnToWorkNumber:50000007,
        password:"123456",
        name:'茵蒂克丝',
        chi:'99',
        mat:'88',
        eng:'66',
        address:'咸阳市',
        school:'陕西邮电职业技术学院'
    },
],
    teachers:[
        {
            Permission:6,
            LearnToWorkNumber:80000000,
            password:"123456",
            name:'爱莉希雅',
            address:'咸阳市',
            school:'陕西邮电职业技术学院'
        },
        {
            Permission:6,
            LearnToWorkNumber:80000001,
            password:"123456",
            name:'帕朵',
            address:'咸阳市',
            school:'陕西邮电职业技术学院'
        },
        {
            Permission:6,
            LearnToWorkNumber:80000002,
            password:"123456",
            name:'伊甸',
            address:'咸阳市',
            school:'陕西邮电职业技术学院'
        },
    ],
    admin:[
        {
            name:'admin',
            Permission:3,
            LearnToWorkNumber:0,
            password:"123456",
            address:'咸阳市',
            school:'陕西邮电职业技术学院'
        }
    ]
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
    plugins: [VueXAlong({
        name: 'store',     //存放在localStroage或者sessionStroage 中的名字
        local: false,      //是否存放在local中  false 不存放 如果存放按照下面session的配置
        session: { list: [], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
    })]

})