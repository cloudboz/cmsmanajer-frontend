import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";

export default function Input({
  className,
  label,
  placeholder,
  name,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) {
  return (
    <FormControl className={className} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <OutlinedInput
        name={name}
        type={
          name == "password"
            ? showPassword
              ? "text"
              : "password"
            : name == "email"
            ? "email"
            : "text"
        }
        value={values[name]}
        placeholder={placeholder}
        margin="dense"
        error={touched[name] && !!errors[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          backgroundColor: "#FAFAFA",
        }}
        endAdornment={
          name == "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </InputAdornment>
          )
        }
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {touched[name] && errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
