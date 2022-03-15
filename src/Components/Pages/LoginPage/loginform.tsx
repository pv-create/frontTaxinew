import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {rules} from "../../../rules/validationrules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../../Store/Reducers/Auth/actioncreators";
import {useTypeSelector} from "../../../Hooks/useTypeSelector";
const LoginForm = () => {

    const[userName, setUserName]=useState('')
    const[password, setPassword]=useState('')


    const {error, isLoading}=useTypeSelector(state => state.auth)
    const dispatch=useDispatch()
    const submit=()=>{
        dispatch(AuthActionCreators.login(userName,password))
    }
    return (
        <div className="mb-md-5 mt-md-4 pb-5">
            {error&& <div className='container'>
                {error}
            </div>}
            <Form
            onFinish={submit}>
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your Email and password!</p>

                <div className="form-outline form-white mb-4">
                    <Form.Item
                        label="Email"
                        name="username"
                        rules={[
                            rules.required('Please input your Number!')
                        ]}
                    >
                        <input value={userName} onChange={e=>setUserName(e.target.value)}  id="typeEmailX" className="form-control form-control-lg"/>
                    </Form.Item>
                </div>

                <div className="form-outline form-white mb-4">
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            rules.required('enter your password')
                        ]}
                    >
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" id="typePasswordX"
                               className="form-control form-control-lg"/>
                    </Form.Item>
                </div>

                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot
                    password?</a></p>



                <Form.Item>
                    <Button loading={isLoading}  className='btn btn-secondary' htmlType="submit"> Войти </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
