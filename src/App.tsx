import {
  AppShell,
  MantineThemeOverride,
  MantineProvider,
  createStyles,
} from "@mantine/core";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import HeaderResponsive from "./components/HeaderResponsive/index";
import FooterResponsive from "./components/FooterResponsive";

/**
 * used to overWrite default theme settings
 */
const MY_THEME: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "pink",
  primaryShade: { dark: 4 },
  loader: "bars",
  colors: {
    dark: [
      "#ffdeeb",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#373A40",
      "#141517",
      "#101113",
    ],
  },
};

/**
 * defines css classNames based on my theme
 */
const useStyles = createStyles((MY_THEME) => {
  return {
    wrapperImg: {
      backgroundImage: "url(" + "/backgroundOverlayLg.png" + ")",
      backgroundAttachment: "scroll",
      backgroundSize: "100%",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      marginTop: "110px",
      [MY_THEME.fn.smallerThan("md")]: {
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
        backgroundAttachment: "fixed",
        marginTop: "105px",
      },
    },
  };
});

/**
 * links in header and footer to redirect user to
 * projects, resume, or contact section on the one page site
 * will need to use scroll into view hook so this might change
 */
const pageSectionLinks = [
  { label: "Projects" },
  { label: "Resume" },
  { label: "Contact" },
];

export default function App() {
  /**
   * styling classNames available
   */
  const { classes } = useStyles();

  return (
    <div className={classes.wrapperImg}>
      <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
        <AppShell
          header={<HeaderResponsive links={pageSectionLinks} />}
          footer={<FooterResponsive links={pageSectionLinks} />}
        >
          <HomePage />
          {pageSectionLinks.length > 2 && (
            <>
              <ProjectPage id={pageSectionLinks[0].label} />
              <ResumePage id={pageSectionLinks[1].label} />
              <ContactPage id={pageSectionLinks[2].label} />
            </>
          )}
        </AppShell>
      </MantineProvider>
    </div>
  );
}
