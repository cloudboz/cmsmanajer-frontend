import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";

import Input from "./input";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    // width: "70%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: theme.spacing(4),
    borderRadius: "10px",
  },
  bold: {
    fontWeight: "bold",
  },
  form: {
    marginBlock: "3px",
  },
}));

export default function Form({ text, data, schema }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState({});

  React.useEffect(() => {
    let val = {};
    data.map((e) => {
      val[e.name] = "";
    });
    setInitialValues(val);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h4" className={classes.bold}>
        {text.title}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        {text.subtitle} <span className={classes.bold}>{text.title2}</span>
      </Typography>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={initialValues}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
          isValid,
          dirty,
          submitForm,
        }) => (
          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {data.map((input, i) => (
              <Input
                name={input.name}
                className={classes.form}
                placeholder={input.placeholder}
                values={values}
                errors={errors}
                touched={touched}
                showPassword={showPassword}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                key={i}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{ marginTop: "25px", marginBottom: "3px" }}
              disabled={!dirty || !isValid}
              onClick={submitForm}
            >
              {text.button}
            </Button>
            {text.title == "Sign Up" && (
              <Typography variant="caption" align="center" display="block">
                By signing up, you agree to the{" "}
                <strong>Terms of Service</strong>
              </Typography>
            )}
          </form>
        )}
      </Formik>
    </Container>
  );
}
