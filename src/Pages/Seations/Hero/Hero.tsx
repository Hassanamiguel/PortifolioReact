import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/Avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../theme";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

    const StyleHero = styled('div')(() => ({
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: { // >= mobile
            paddingTop: '200px',
            height: '100%'

        },
        [theme.breakpoints.up('md')]: {// <= mobile
            paddingTop: '0px',
            height: '100vh'
        }
    }))

    const StyleImg = styled('img')(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        /*margin: '0% 10%'*/
    }))

    return (
        <>
            <StyleHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={10}>
                                    <AnimatedBackground/>
                                </Box>

                                <Box position={'relative'} textAlign={'center'}>

                                <StyleImg src={Avatar} />
                                
                                </Box>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={12} md={7} textAlign='center'>
                            <Typography color="primary.contrastText" variant='h1' pb={2}>
                                Hassain Miguel
                            </Typography>
                            <Typography color="primary.contrastText" variant='h2' >
                                I'm a Software Dev
                            </Typography>

                            <Grid container display="flex" justifyContent='center' spacing={3} pt={3}>
                                <Grid item xs={12} md={5} display='flex' justifyContent='center'>
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>

                                </Grid>
                                <Grid item xs={12} md={5} display='flex' justifyContent='center'>
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyleHero>
        </>
    )
}

export default Hero