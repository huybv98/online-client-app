"use client"

import AppLogo from "@/components/AppMenu/AppLogo";
import { Form, Col, Row, Checkbox, Divider} from "antd";
import { useTranslation } from "@/locales/client";
import AppInput from "@/components/AppInput";
import AppButton from "@/components/AppButton";
import AppCheckbox from "@/components/AppCheckbox";
import { RULES_REQUIRED } from "@/constants/validation";


const PageAuth = () => {
    const { t } = useTranslation('translation')
    const [form] = Form.useForm()
    const rulesForm = {
        username: [RULES_REQUIRED],
        password: [RULES_REQUIRED]
    }

    const onFinish = (values: any) => {
        console.log('values', values);
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
                            <div className="text">Bạn chưa có tài khoản?
                                <a className="register" href="/register">Đăng ký ngay</a>
                            </div>
                        </div>
                        <Form form={form} lassName='form-login' layout="vertical" autoComplete="off" onFinish={onFinish}>
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
                                        <AppCheckbox>Lưu mật khẩu </AppCheckbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item>
                                        <AppButton type="primary" htmlType="submit">Đăng nhập</AppButton>
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
                                        <AppButton>Facebook</AppButton>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item>
                                        <AppButton>Google</AppButton>
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
