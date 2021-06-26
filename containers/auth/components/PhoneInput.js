import dynamic from "next/dynamic";
const MuiPhoneNumber = dynamic(() => import("material-ui-phone-number"), {
  ssr: false,
});
import { Typography, FormControl, FormHelperText } from "@material-ui/core";

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
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
