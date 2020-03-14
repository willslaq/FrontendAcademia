import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './index.css';
import avatar from '../../assets/ranking/avatar-exemplo.jpg';

const useStyles = makeStyles(theme => ({
    handleContainer: {
        marginTop: 20,
    }
}))

function Ranking() {

    const classes = useStyles();

    return (
        <>
            <Container className={classes.handleContainer}>
                <Grid container>
                    <Grid item>
                        <img alt="" src={avatar} className='bolota' />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            gutterBottom
                            className='first'
                        >
                            1º Lugar
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
            <Container className={classes.handleContainer}>
                <img alt="" src={avatar} className='bolota' />
            </Container>
        </>
    )
}

export default withRouter(Ranking);