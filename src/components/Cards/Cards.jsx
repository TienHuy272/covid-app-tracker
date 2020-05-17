import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return "LOADING ..."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" gutterBottom>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" gutterBottom>Number recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" gutterBottom>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;