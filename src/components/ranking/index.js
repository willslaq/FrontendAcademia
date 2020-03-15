import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './index.css';
import avatar from '../../assets/ranking/avatar-exemplo.jpg';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        // marginTop: 20,
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    resetTextColor: {
        color: "#FFF",
        padding: 2,
    }
}))

function Ranking() {

    const classes = useStyles();

    return (

        <Container>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item align-items="center" xs={12}>
                        <img alt="" src={avatar} className="bolota" />
                        <Typography gutterBottom variant="subtitle2" className='first'>
                            1º Lugar
                    </Typography>
                        <Typography variant="h6" gutterBottom color="primary">
                            Lorem Ipsum Sit Amet
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="body2" className={classes.resetTextColor}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit sapien. Nam malesuada diam vitae ligula convallis suscipit. Praesent.
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div className="bolota-score">
                                <Typography variant="subtitle1" align="center" justify="center" color="secondary">Score</Typography>
                                <Typography variant="subtitle1" align="center" justify="center" color="secondary">2000</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default withRouter(Ranking);