import Header from 'src/Components/Header/index'
import styles from './layout.module.css'
import Routes from 'src/Routes/Routes'
import { Box } from '@mui/material'
import ThemeProvider from 'src/context/themeContext'
import Footer from 'src/Components/Footer/index'

const Layout = () => {
  return (
    <>
      <ThemeProvider>
        <Box
          sx={{
            width: 1,
            height: 1,
            backgroundColor: 'primary.dark',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ height: 'fit-content' }}>
            <Header />
          </Box>
          <Box
            sx={{
              height: 'fit-content',
              alignSelf: 'center',
              borderRadius: 5,
              boxShadow:
                'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            }}
          >
            <Routes />
          </Box>
          <Box sx={{ height: 'fit-content' }}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Layout
