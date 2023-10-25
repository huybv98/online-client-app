"use client"

import AppLogo from "@/components/AppMenu/AppLogo";
import { Button, Form, Input, Col, Row } from "antd";
import { useTranslation } from "@/locales/client";


const PageAuth = () => {
    const { t } = useTranslation('translation')
    // const [form] = Form.useForm();

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
                        <Form className='form-login' layout="vertical" autoComplete="off">
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name="username" label="UserName" rules={[{required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name="password" label="Password" rules={[{required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className='w-full'>
                                            Submit
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
