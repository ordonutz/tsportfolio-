import { createStyles, Container, Group, Anchor } from "@mantine/core";
import MainLogo from "../../assets/MainLogo";
import { Link } from "react-scroll";

const useStyles = createStyles((theme) => ({
  footer: {
    marginInline: "auto",
    background: "transparent",
    maxWidth: "2000px",
  },

  inner: {
    maxWidth: "2000px",
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8.5rem",
    [theme.fn.smallerThan("sm")]: {
      padding: "0 1rem",
    },
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      padding: "0 1rem",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
  linkStyle: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  logo: {
    height: "90px",
    [theme.fn.smallerThan("sm")]: {
      height: "70px",
    },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  },
}));

// TO DO export interface since the same one is used in header too
interface FooterSimpleProps {
  links: {
    label: string;
  }[];
}

export default function FooterResponsive({ links }: FooterSimpleProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link
      to={link.label}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      key={link.label}
      className={classes.linkStyle}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link
          to={"landingSection"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <MainLogo className={classes.logo} />
        </Link>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
