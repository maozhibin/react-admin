/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { PwaInstaller } from '../widget';
import { connectAlita } from 'redux-alita';
import * as menu from '../../api/menu';
import * as variable from '../../utils/variable';
const FormItem = Form.Item;

class Login extends React.Component {

    // componentDidMount() {
    //     const { setAlitaState } = this.props;

    //     console.log("this.props={}",this.props);
    //     setAlitaState({ stateName: 'auth', data: null });
    // }
    // componentDidUpdate(prevProps) { // React 16.3+弃用componentWillReceiveProps
    //     const { auth: nextAuth = {}, history } = this.props;
    //     // const { history } = this.props;
    //     if (nextAuth.data && nextAuth.data.uid) { // 判断是否登陆
    //         console.log(1111111111111)
    //         localStorage.setItem('user', JSON.stringify(nextAuth.data));
    //         history.push('/');
    //     }

    // }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                menu.menuList().then(menuStr => {//登陆成功
                    //存储菜单
                    if(variable.success_code==menuStr.code){
                        //存储菜单
                        localStorage.setItem('menuList', JSON.stringify(menuStr.data.menus))
                        //存储登陆信息
                        localStorage.setItem('user', JSON.stringify(menuStr.data.token))
                        this.props.history.push('/app/dashboard/index')
                    }else{//登陆失败
                            alert(menuStr.desc)
                            console.log("登陆失败")
                            return;
                    }
                });
            }
        });
    };



    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>通用后台模板</span>
                        <PwaInstaller />
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <span className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</span>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}


export default connectAlita(['auth'])(Form.create()(Login));

