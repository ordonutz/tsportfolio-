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

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    outerContainer: {
      border: "3px solid yellow",
      height: "100vh",
      width: "max(calc(1.23rem + 60%), 80%)",
      marginInline: "auto",
      [theme.fn.smallerThan("xs")]: {
        width: "90%",
      },
    },
    wrapper: {
      display: "flex",
      backgroundColor: theme.colors.dark[8],
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${theme.colors.gray[2]}`,

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
        "linear-gradient(242deg, rgba(245,192,182,1) 0%, rgba(250,166,159,1) 100%)",
      boxShadow:
        "inset 4px -4px 4px rgba(0, 0, 0, 0.25), inset -4px 4px 4px rgba(255, 255, 255, 0.25)",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
   * @param
   */
  const handleSubmit = async () => {
    try {
      const res = await mockPromise(false);
      console.log("!!!", res);
      setSubSuccess(true);
      setShowAlert(true);
    } catch (err) {
      console.log("fail", err);
      setSubErr(true);
      setShowAlert(true);
    }
    form.reset();
  };
  return (
    <div className={classes.outerContainer} id={props.id}>
      {/* <Paper shadow="md" radius="lg" id={props.id}>
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text
              size="lg"
              weight={700}
              className={classes.title}
              sx={{ color: "red" }}
            >
              Contact information
            </Text>
            <Text>something</Text>
            <ContactIcons />
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
          {subErr && showAlert && (
            <Alert
              icon={<CheckIcon />}
              title="Fail!"
              color="red"
              radius="md"
              variant="light"
              withCloseButton
              closeButtonLabel="Close alert"
              onClose={() => setShowAlert(false)}
            >
              oh no try again
            </Alert>
          )}
          <form
            id="contact-form"
            className={classes.form}
            onSubmit={(event) => {
              event.preventDefault();
              if (form.validate().hasErrors) {
              } else {
                handleSubmit();
              }
            }}
          >
            <Text size="lg" weight={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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
                placeholder="Thanks for reaching out :) feedback appreciated"
                minRows={3}
                required
                {...form.getInputProps("message")}
              />

              <Group position="right" mt="md">
                <Button
                  aria-label="submit"
                  type="submit"
                  className={classes.control}
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper> */}
    </div>
  );
};
export default ContactPage;
