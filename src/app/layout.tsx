import './globals.scss'
import type { Metadata } from 'next'
import { dir } from 'i18next'
import { detectLanguage } from '@/locales'
import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import { GlobalFont } from '@/assets/style/variables'
import StyledComponentsRegistry from '@/utils/AntdRegistry'
import viVN from 'antd/locale/vi_VN'
import { validateMessages } from '@/constants/validation'

export const metadata: Metadata = {
    title: {
        template: '%s | Khảo thí online',
        default: 'Khảo thí online', // a default is required when creating a template
    },
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: React.ReactNode }) =>  {
    const lng = detectLanguage()
    const config: ThemeConfig = {
        token: {
            ...GlobalFont
        },
    }

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
      <StyledComponentsRegistry>
          <ConfigProvider theme={config} locale={viVN} form={{ validateMessages }}>
              { children }
          </ConfigProvider>
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
