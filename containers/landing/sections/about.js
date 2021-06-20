import {
  Container,
  Grid,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={5}>
        <Grid item sm={7}>
          <Typography variant="h5" className={classes.bold} paragraph>
            CMS Manajer
          </Typography>
          <Typography variant="subtitle1" paragraph>
            CMS Manajer is a intuitive control panel fol managing cloud servers.
            You can set up your server even install application like LAMP, LEMP,
            CMS (WordPress, PrestaShop, MediaWiki, Moodle, etc) in just one
            click.
          </Typography>
        </Grid>
        <Grid item sm>
          <Grid container className={classes.grid}>
            <Grid item xs>
              <Box className={classes.item}>
                <Typography variant="body1" className={classes.bold} paragraph>
                  Products
                </Typography>
                <Typography variant="body2">Features</Typography>
                <Typography variant="body2">Pricing</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.item}>
                <Typography variant="body1" className={classes.bold} paragraph>
                  Resources
                </Typography>
                <Typography variant="body2">Documentation</Typography>
                <Typography variant="body2">Blog</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.item}>
                <Typography variant="body1" className={classes.bold} paragraph>
                  Company
                </Typography>
                <Typography variant="body2">Careers</Typography>
                <Typography variant="body2">Contact us</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    background: `linear-gradient(96.72deg, ${theme.palette.primary.main} 19.52%, ${theme.palette.primary.light} 81.79%);`,
  },
  container: {
    paddingBlock: theme.spacing(10),
    color: "black",
    alignItems: "center",
  },
  bold: {
    fontWeight: 600,
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(1.5),
    width: "9rem",
  },
  item: {
    paddingBlock: theme.spacing(2),
    paddingInline: theme.spacing(4),
  },
  grid: {
    justifyContent: "center",
    marginBlockEnd: theme.spacing(4),
  },
}));
