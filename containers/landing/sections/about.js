import {
  Container,
  Grid,
  makeStyles,
  Box,
  Typography,
  Hidden,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  withStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={7} xs={12}>
            <Typography variant="h5" className={classes.bold} paragraph>
              CMS Manajer
            </Typography>
            <Typography variant="subtitle1" paragraph>
              CMS Manajer is a intuitive control panel fol managing cloud
              servers. You can set up your server even install application like
              LAMP, LEMP, CMS (WordPress, PrestaShop, MediaWiki, Moodle, etc) in
              just one click.
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            {/* For mobile */}
            <Hidden smUp>
              <AccordionItem title="Products">
                <Typography variant="body2">Features</Typography>
                <Typography variant="body2">Pricing</Typography>
              </AccordionItem>
              <AccordionItem title="Resources">
                <Typography variant="body2">Documentation</Typography>
                <Typography variant="body2">Blog</Typography>
              </AccordionItem>
              <AccordionItem title="Company">
                <Typography variant="body2">Careers</Typography>
                <Typography variant="body2">Contact us</Typography>
              </AccordionItem>
            </Hidden>
            {/* End for mobile */}
            <Hidden xsDown>
              <Grid container className={classes.grid}>
                <Grid item xs>
                  <Box className={classes.item}>
                    <Typography
                      variant="body1"
                      className={classes.bold}
                      paragraph
                    >
                      Products
                    </Typography>
                    <Typography variant="body2">Features</Typography>
                    <Typography variant="body2">Pricing</Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box className={classes.item}>
                    <Typography
                      variant="body1"
                      className={classes.bold}
                      paragraph
                    >
                      Resources
                    </Typography>
                    <Typography variant="body2">Documentation</Typography>
                    <Typography variant="body2">Blog</Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box className={classes.item}>
                    <Typography
                      variant="body1"
                      className={classes.bold}
                      paragraph
                    >
                      Company
                    </Typography>
                    <Typography variant="body2">Careers</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

function AccordionItem({ title, children }) {
  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ fontWeight: 600 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    background: `linear-gradient(96.72deg, ${theme.palette.primary.main} 19.52%, ${theme.palette.primary.light} 81.79%);`,
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  grid: {
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
}));

const Accordion = withStyles({
  root: {
    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    padding: 0,
    minHeight: 50,
    "&$expanded": {
      minHeight: 50,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "grid",
    paddingTop: 0,
    paddingBottom: 10,
    rowGap: 10,
  },
}))(MuiAccordionDetails);
