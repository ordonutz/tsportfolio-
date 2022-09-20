import { createStyles, Container, Group, Anchor } from "@mantine/core";
import MainLogo from "../../assets/MainLogo";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
  },

  inner: {
    maxWidth: "1440px",
    // background: "red",
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

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterResponsive({ links }: FooterSimpleProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
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
