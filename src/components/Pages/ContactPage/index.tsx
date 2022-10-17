import React from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Alert,
  CheckIcon,
} from "@mantine/core";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "@mantine/form";
import ContactIcons from "./ContactIcons";
import { ThemeContext } from "@emotion/react";
import ErrorIcon from "../../../assets/ErrorIcon";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor: theme.colors.dark[8],
      borderRadius: theme.radius.lg,
      padding: 4,
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      background:
        "linear-gradient(242deg, rgba(194,37,92,1) 0%, rgba(25,113,194,1) 100%)",

      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
    contactIcon: {
      width: "1.5em",
    },
  };
});

/**
 * values for contact form
 */
interface formValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  scrollRef?: React.MutableRefObject<any>;
  id: string;
}

const ContactPage = (props: ContactProps) => {
  const { classes } = useStyles();
  const [subSuccess, setSubSuccess] = useState(false); // true if form is successfully submitted to conditionally render success message
  const [subErr, setSubErr] = useState(false); // true if form failed to submit to conditionally render error message
  const [showAlert, setShowAlert] = useState(false); // true if alert is visible the onClose of alert changes it to false

  /**
   * @param hi
   */
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const mockPromise = (flag: boolean) => {
    return new Promise((resolve, reject) => {
      console.log("Making request ....");
      flag ? resolve("Mock Success") : reject("Mock error");
    });
  };

  /**
   * FUNCTION TO MOCK ON SUBMIT
   * @param
   */
  // const handleSubmit = async () => {
  //   console.log(subErr, "test");
  //   if (!subErr) {
  //     console.log(subErr);
  //     setSubErr(true);
  //   }
  //   try {
  //     const res = await mockPromise(false);
  //     console.log("!!!", res);
  //     setSubSuccess(true);
  //     setShowAlert(true);
  //   } catch (err) {
  //     console.log("fail", err);
  //     setSubErr(true);
  //     setShowAlert(true);
  //   }
  //   form.reset();
  // };

  return (
    <div
      style={{
        marginTop: "0px",
        maxWidth: "900px",
        marginInline: "auto",
      }}
    >
      <Paper shadow="md" radius="lg" id={props.id}>
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text
              size="lg"
              weight={700}
              className={classes.title}
              sx={{ color: "#F1F3F5" }}
            >
              Contact information
            </Text>
            <ContactIcons className={classes.contactIcon} />
          </div>
          {subSuccess && showAlert && (
            <Alert
              icon={<CheckIcon />}
              title="Success!"
              color="lime"
              radius="md"
              variant="light"
              withCloseButton
              closeButtonLabel="Close alert"
              onClose={() => setShowAlert(false)}
            >
              Thank you, your message has been received. I'll get back to you
              shortly. In the meantime connect with me through LinkedIn or
              GitHub.
            </Alert>
          )}
          {subErr && showAlert ? (
            <Alert
              icon={<ErrorIcon />}
              title="Message Failed to Send!"
              color="red"
              radius="md"
              variant="light"
              onClose={() => setShowAlert(false)}
            >
              Message failed to send.
            </Alert>
          ) : (
            <form
              id="contact-form"
              className={classes.form}
              /** MOCK SUBMIT FUNCTION */
              // onSubmit={(event) => {
              //   event.preventDefault();
              //   if (form.validate().hasErrors) {
              //   } else {
              //     handleSubmit();
              //   }
              // }}
              onSubmit={form.onSubmit((values) => {
                console.log("vals", values);
                const form = document.querySelector(
                  "#contact-form"
                ) as HTMLFormElement;
                console.log("form", form);
                emailjs
                  .sendForm(
                    "service_zxgnuxb",
                    "contact-form",
                    form,
                    "IFkPW2qVHPTPcujnk"
                  )
                  .then(
                    (result) => {
                      console.log("success", result.text);
                    },
                    (error) => {
                      console.log("fail", error.text);
                    }
                  )
                  .catch((error) => {
                    console.log("fail", error);
                  });
              })}
            >
              <Text size="lg" weight={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid
                  cols={1}
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput
                    name="user_name"
                    aria-label="Your name"
                    label="Your name"
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    name="user_email"
                    aria-label="Your email"
                    label="Your email"
                    required
                    {...form.getInputProps("email")}
                  />
                </SimpleGrid>

                <TextInput
                  name="subject"
                  aria-label="Subject"
                  mt="md"
                  label="Subject"
                  required
                  {...form.getInputProps("subject")}
                />

                <Textarea
                  name="message"
                  aria-label="Your message"
                  mt="md"
                  placeholder="Thanks for reaching out :)"
                  minRows={3}
                  required
                  {...form.getInputProps("message")}
                />

                <Group position="right" mt="md">
                  <Button
                    radius="lg"
                    aria-label="submit"
                    type="submit"
                    className={classes.control}
                    color="blue"
                  >
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          )}
        </div>
      </Paper>
    </div>
  );
};
export default ContactPage;
