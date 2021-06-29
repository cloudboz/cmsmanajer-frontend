import dynamic from "next/dynamic";
const MuiPhoneNumber = dynamic(() => import("material-ui-phone-number"), {
  ssr: false,
});
import {
  Typography,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const useTooltipStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1A1A1A",
    fontSize: 12,
    maxWidth: 400,
    padding: 10,
  },
}));

export default function PhoneInput({
  name,
  label,
  values,
  className,
  handleBlur,
  handleChange,
  errors,
  touched,
}) {
  const classes = useTooltipStyles();
  return (
    <FormControl className={className} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <MuiPhoneNumber
        variant="outlined"
        margin="dense"
        value={values[name]}
        error={!!errors[name]}
        defaultCountry={"id"}
        onBlur={handleBlur}
        onChange={(e) => handleChange({ target: { name, value: e } })}
        inputClass={className}
        className={className}
        style={{
          backgroundColor: "#FAFAFA",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip
                classes={classes}
                title="By continuing you will recieve a one-time verification code to your phone number by SMS. Message and data charges may apply."
              >
                <IconButton aria-label="toggle info" edge="end">
                  <HelpOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
