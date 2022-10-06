import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MainLogo from "../../assets/MainLogo";
import React from "react";

const HEADER_HEIGHT = "90px";

const useStyles = createStyles((theme) => {
  return {
    root: {
      position: "relative",
      zIndex: 1,
      background: "transparent",
      marginBottom: "2%",
    },

    dropdown: {
      position: "absolute",
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",

      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      height: "100%",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.md,
      textDecoration: "none",
      color: theme.colors.dark[0],
      fontSize: theme.fontSizes.md,
      fontWeight: 500,

      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.colors.dark[6],
      },

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  };
});

interface HeaderResponsiveProps {
  links: {
    label: string;
  }[];
  scrollToSection: (elementRefName: string) => void;
}

const HeaderResponsive = (props: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes, cx } = useStyles();

  const items = props.links.map((link) => (
    <a
      key={link.label}
      className={cx(classes.link)}
      onClick={(event) => {
        event.preventDefault();
        console.log("hello from the on click", link.label);
        props.scrollToSection(link.label);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} withBorder={false} className={classes.root}>
      <Container size={1320} className={classes.header}>
        <MainLogo />

        <Group spacing={7} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderResponsive;
