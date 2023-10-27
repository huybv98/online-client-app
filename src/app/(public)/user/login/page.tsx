"use client"

import AppLogo from "@/components/AppMenu/AppLogo";
import {Button, Form, Input, Col, Row, Checkbox, Divider} from "antd";
import { useTranslation } from "@/locales/client";
import AppInput from "@/components/AppInput";
import { RULES_REQUIRED } from "@/constants/validation";


const PageAuth = () => {
    const { t } = useTranslation('translation')

    const rulesForm = {
        username: [RULES_REQUIRED],
        password: [RULES_REQUIRED]
    }

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    }

    return (
        <>
            <div className='container-login'>
                <div className='wrapper'>
                    <div className='wrapper-logo'>
                        <AppLogo className='justify-center'/>
                    </div>
                    <div className='wrapper-login'>
                        <div className="wrapper-title">
                            <div className='form-title'>{ t('user.title') }</div>
                            <div className="text">Bạn chưa có tài khoản giáo viên?
                                <a className="register" href="/register">Đăng ký ngay</a>
                            </div>
                        </div>
                        <Form className='form-login' layout="vertical" autoComplete="off" onFinish={onFinish}>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name="username" label="Tên đăng nhập" rules={rulesForm.username}>
                                        <AppInput/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name="password" label="Mật khẩu" rules={rulesForm.password}>
                                        <AppInput type={'password'}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>Lưu mật khẩu </Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className='app-button w-full'>
                                            Đăng nhập
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item>
                                        <Divider className='app-divider m-0' plain>Hoặc</Divider>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item>
                                        <Button className='app-button w-full'>
                                            Facebook
                                        </Button>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item>
                                        <Button className='app-button w-full'>
                                            Google
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageAuth
