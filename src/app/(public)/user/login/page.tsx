"use client"

import AppLogo from '@/components/AppMenu/AppLogo'
import { Form, Col, Row, Checkbox, Divider} from 'antd'
import { useTranslation } from '@/locales/client'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import AppCheckbox from '@/components/AppCheckbox'
import { RULES_REQUIRED } from '@/constants/validation'
import { userLogin } from '@/services/auth'
import { auth } from '@/utils/auth'
import { usePathname, useRouter } from 'next/navigation'

const PageAuth = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { t } = useTranslation('translation')
    const [form] = Form.useForm()
    const rulesForm = {
        // username: [RULES_REQUIRED],
        password: [RULES_REQUIRED],
        email: [RULES_REQUIRED],
        isRemember: []
    }

    const onFinish = async (values: any) => {
        console.log('values', values)
        const params = {
            ...values,
            email: 'huycoi@gmail.com',
            password: 'Chien1158',
            isRemember: true
        }
        const res = await userLogin(params)
        if(res && res.metadata){
            const isSuccess = auth.loginSuccess(res.metadata)
            if(isSuccess){
                auth.handleRedirect(router, pathname)
            }
        }
    }

    return (
        <>
            <div className='container-login'>
                <div className='wrapper'>
                    <div className='wrapper-logo'>
                        <AppLogo className='justify-center'/>
                    </div>
                    <div className='wrapper-login'>
                        <div className='wrapper-title'>
                            <div className='form-title'>{ t('user.title') }</div>
                            <div className='text'>Bạn chưa có tài khoản?
                                <a className='register' href='/register'>Đăng ký ngay</a>
                            </div>
                        </div>
                        <Form form={form} className='form-login' layout='vertical' autoComplete='off' onFinish={onFinish}>
                            {/*<Row gutter={16}>*/}
                            {/*    <Col xs={24} md={24} lg={24}>*/}
                            {/*        <Form.Item name='username' label={ t('user.username') } rules={rulesForm.username}>*/}
                            {/*            <AppInput/>*/}
                            {/*        </Form.Item>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name='email' label={ t('user.email') } rules={rulesForm.email}>
                                        <AppInput/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name='password' label={ t('user.password') } rules={rulesForm.password}>
                                        <AppInput type={'password'}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item name='isRemember' valuePropName='checked'>
                                        <AppCheckbox>{ t('user.save-password') }</AppCheckbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={24}>
                                    <Form.Item>
                                        <AppButton type='primary' htmlType='submit'>{ t('user.button-submit') }</AppButton>
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
