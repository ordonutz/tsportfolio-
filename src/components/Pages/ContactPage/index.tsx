import React, { LegacyRef } from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from "@mantine/core";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import { RefObject } from "react";
import { MutableRefObject } from "react";
const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

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
      //   backgroundImage: `url(${bg.src})`,
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

export function ContactPage() {
  const { classes } = useStyles();
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

  const handleSubmit = (e: any) => {
    form.onSubmit((values) => {
      console.log("vals", values);
      emailjs
        .sendForm(
          "service_zxgnuxb",
          "template_ublqfzp",
          JSON.stringify(values),
          "IFkPW2qVHPTPcujnk"
        )
        .then(
          (result) => {
            console.log("success", result.text);
          },
          (error) => {
            console.log("fail", error.text);
          }
        );
    });
  };
  function sendEmail(e: any) {
    e.preventDefault();
    console.log("form", form);
    // emailjs
    //   .sendForm(
    //     "service_zxgnuxb",
    //     "template_ublqfzp",
    //     e.target,
    //     "IFkPW2qVHPTPcujnk"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <Paper shadow="md" radius="lg">
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

          {/* <ContactIconsList variant="white" /> */}
        </div>

        <form
          id="contact-form"
          className={classes.form}
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
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                name="user_name"
                aria-label="Your name"
                label="Your name"
                placeholder="Your name"
                {...form.getInputProps("name")}
              />
              <TextInput
                name="user_email"
                aria-label="Your email"
                label="Your email"
                placeholder="you@email.com"
                required
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              name="subject"
              aria-label="Subject"
              mt="md"
              label="Subject"
              placeholder="Subject"
              required
              {...form.getInputProps("subject")}
            />

            <Textarea
              name="message"
              aria-label="Your message"
              mt="md"
              label="Your message"
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
    </Paper>
  );
}
export default ContactPage;
