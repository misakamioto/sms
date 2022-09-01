// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import ScoreInquiry from '../components/index/ScoreInquiry'
import RecordMaintenance from '../components/index/RecordMaintenance'
import PIM from '../components/index/PIM'
import ChangePassword from '../components/index/ChangePassword'
import Index from '../pages/Index'
import store from '../store'

export default new VueRouter({
    mode:'history',
    routes:[
        {   //登录页
            name:'login',
            path:'/',
            component:Login,
            beforeEnter:(to,from,next)=>{
                next()
            }
        },
        {   //主页
            name:'index',
            path:'/index',
            component:Index,
            beforeEnter:(to,from,next)=>{
                next()
            },
            children:[
                {   //成绩查询
                    name:'ScoreInquiry',
                    path:'ScoreInquiry',
                    component:ScoreInquiry
                },
                {   //成绩维护
                    name:'RecordMaintenance',
                    path:'RecordMaintenance',
                    component:RecordMaintenance
                },
                {   //信息查询
                    name:'PIM',
                    path:'PIM',
                    component:PIM
                },
                {   //密码修改
                    name:'ChangePassword',
                    path:'ChangePassword',
                    component:ChangePassword
                },
                {   //学生信息管理
                    name:'StudentInformation',
                    path:'StudentInformation',
                    component:RecordMaintenance
                },
                {   //教师信息管理
                    name:'TeacherInformation',
                    path:'TeacherInformation',
                    component:RecordMaintenance
                },
            ]
        }
    ]
})