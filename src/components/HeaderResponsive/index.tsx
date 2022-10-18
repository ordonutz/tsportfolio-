import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MainLogo from "../../assets/MainLogo";
import React from "react";
import { Link } from "react-scroll";

const HEADER_HEIGHT = "80px";

const useStyles = createStyles((theme) => {
  return {
    root: {
      position: "absolute",
      height: "auto",
      top: "0",
      marginInline: "auto",
      width: "auto",
    },

    dropdown: {
      position: "absolute",
      top: "90px",
      left: 0,
      right: 0,
      zIndex: 0,
      borderTop: "4px solid #ffdeeb",
      background: "#373A40",
      overflow: "hidden",

      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "2000px",

      marginInline: "auto",

      padding: "0 max(calc(6.23rem + 4.77vw), 5.63rem)",
      [theme.fn.smallerThan("md")]: {
        padding: "0 1rem",
      },
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
      borderRadius: theme.radius.lg,
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
    logo: {
      height: "70px",
      width: "190px",
      [theme.fn.smallerThan("sm")]: {
        height: "50px",
        width: "129px",
      },
    },
  };
});

interface HeaderResponsiveProps {
  links: {
    label: string;
  }[];
  id: string;
}

const HeaderResponsive = (props: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useStyles();

  const items = props.links.map((link) => (
    <Link
      to={link.label}
      spy={true}
      smooth={true}
      key={link.label}
      className={classes.link}
      onClick={toggle}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header
      id={props.id}
      height="100%"
      withBorder={false}
      className={classes.root}
      style={{ height: "auto" }}
    >
      <div className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <div className={classes.dropdown} style={styles}>
              {items}
            </div>
          )}
        </Transition>

        <MainLogo className={classes.logo} />
        <Group spacing={10} className={classes.links}>
          {items}
        </Group>
      </div>
    </Header>
  );
};

export default HeaderResponsive;
