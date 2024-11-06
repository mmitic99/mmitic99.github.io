import { Button, Grid2, TextField, Typography } from "@mui/material";
import React from "react";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import SocialMediaBar from "./SocialMediaBar";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const initialValues = { name: "", email: "", message: "" };
const handleSubmit = (values, actions) => {
  console.log(values);
  actions.setSubmitting(false);
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      values,
      process.env.REACT_APP_EMAILJS_PUB_KEY
    )
    .then(
      () => {
        toast.success("Successfully sent message! ");
        actions.resetForm();
        actions.setSubmitting(false);
      },
      (err) => {
        toast.error(JSON.stringify(err));
        actions.setSubmitting(false);
      }
    );
};
const validationSchema = Yup.object().shape({
  name: Yup.string().min(1).required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function Contact({ navbarHeight }) {
  console.log(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    process.env.REACT_APP_EMAILJS_PUB_KEY
  );

  return (
    <CenteredBox navbarHeight={navbarHeight}>
      <TransparentPaper>
        <Grid2
          container
          spacing={{ xs: 0, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{
            alignItems: "center",
            justify: "flex-end",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            alignItems="center"
            justify="flex-end"
            order={{ xs: 2, md: 1 }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={process.env.PUBLIC_URL + "/img/contact.png"}
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            alignItems="center"
            justify="center"
            order={{ xs: 1, md: 2 }}
          >
            <Typography variant="h4" justifyContent="center" align="center">
              Contact
            </Typography>
          </Grid2>
          <Grid2 alignItems="center" justify="flex-end" order={3}>
            <Grid2 container justifyContent="center" align="center" spacing={2}>
              <Grid2 justifyContent="center" align="center" size={{ xs: 12 }}>
                <Typography variant="body1">
                  Feel free to get in touch with me via social media or email.
                </Typography>
              </Grid2>
              <Grid2 justifyContent="center" align="center" size={{ xs: 12 }}>
                <SocialMediaBar
                  horizontal="true"
                  style={{
                    position: "static",
                    margin: "0",
                  }}
                />
              </Grid2>
              <Grid2
                justifyContent="center"
                align="center"
                sx={{ mb: "2vh" }}
                size={{ xs: 12 }}
              >
                <Typography variant="body1">
                  Or simply submit the form below, and I'll get back to you as
                  soon as possible.
                </Typography>
              </Grid2>
              <Grid2
                size={{ xs: 12, md: 6 }}
                justifyContent="center"
                align="center"
              >
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    isValid,
                    dirty,
                  }) => (
                    <Form>
                      <Grid2
                        container
                        spacing={2}
                        justifyContent="center"
                        align="center"
                      >
                        <Grid2 item size={{ xs: 10, md: 12 }}>
                          <TextField
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />
                        </Grid2>
                        <Grid2 item size={{ xs: 10, md: 12 }}>
                          <TextField
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                          />
                        </Grid2>
                        <Grid2 item size={{ xs: 10, md: 12 }}>
                          <TextField
                            multiline
                            minRows={4}
                            maxRows={4}
                            fullWidth
                            required
                            name="message"
                            label="Message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.message && Boolean(errors.message)}
                            helperText={touched.message && errors.message}
                          />
                        </Grid2>
                        <Grid2 item size={{ xs: 10, md: 12 }}>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !isValid || !dirty}
                          >
                            Submit
                          </Button>
                        </Grid2>
                      </Grid2>
                    </Form>
                  )}
                </Formik>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}
export default Contact;
