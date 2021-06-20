import FormApp from "./FormApp";
import FormWeb from "./FormWeb";
import FormWP from "./FormWP";

export default function Form(props) {
  switch (props.type) {
    case "app":
      return <FormApp {...props} />;
    case "web":
      return <FormWeb {...props} />;
    case "wordpress":
      return <FormWP {...props} />;
    default:
      return <></>;
  }
}
