import React from "react";
import Navbar from "./components/Navbar";
import Modal from "components/Modal";
import ContactForm from "./components/ContactForm";
import Snackbar from "components/Snackbar";
import { Main, Provider, Feature, Invitation, About, Footer } from "./sections";
import { useContact } from "hooks/contact";

export default function Landing() {
  const [open, setOpen] = React.useState(false);
  const [openBar, setOpenBar] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("success");

  const { contact } = useContact();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenBar(false);
  };

  const handleContact = async (values) => {
    try {
      await contact.mutateAsync(values);
      setType("success");
      setMessage("Email sent.");
      setOpenBar(true);
      setOpen(false);
    } catch (error) {
      console.log(error.response);
      switch (error.response?.status) {
        case 553:
          setMessage("Your email failed to send. Please try again.");
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      setType("error");
      setOpenBar(true);
    }
  };

  return (
    <>
      <Navbar openContactUs={handleOpen} />
      <Main />
      <Provider />
      <Feature />
      <Invitation />
      <About openContactUs={handleOpen} />
      <Footer />
      <Modal open={open} keepOnClickAway handleClose={handleClose}>
        <ContactForm onSubmit={handleContact} isLoading={contact.isLoading} />
      </Modal>
      <Snackbar
        severity={type}
        message={message}
        open={openBar}
        handleClose={handleCloseBar}
      />
    </>
  );
}
