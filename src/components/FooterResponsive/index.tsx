import { createStyles, Container, Group, Anchor } from "@mantine/core";
import MainLogo from "../../assets/MainLogo";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
    background: "transparent",
  },

  inner: {
    maxWidth: "1440px",
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
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
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      onClick={(event) => {
        event.preventDefault();

        console.log(" FOOTER i was clicked", link.label);
      }}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MainLogo />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
