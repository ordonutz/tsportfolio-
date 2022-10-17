import { ThemeIcon, Text, Group, Stack, createStyles } from "@mantine/core";
import React from "react";
import GitIcon from "../../../../assets/GitIcon";
import LinkedIcon from "../../../../assets/LinkedIcon";
import MailIcon from "../../../../assets/MailIcon";
import PhoneIcon from "../../../../assets/PhoneIcon";

interface ContactProps {
  className?: string;
}

const useStyles = createStyles(() => {
  return {
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
    },
  };
});

const ContactIcons = (props: ContactProps) => {
  const { classes } = useStyles();
  return (
    <Stack>
      <Group>
        <div className={props.className}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.68333 6.22222V1.55556C9.68333 1.55556 5.27742 4.84815 4.84893 5.019C4.4277 4.85593 0 1.55556 0 1.55556V6.22222C0 6.87037 0.128304 7 0.72625 7H8.95708C9.56931 7 9.68333 6.88619 9.68333 6.22222ZM9.67631 0.64063C9.67631 0.168518 9.54777 0 8.95708 0H0.72625C0.118621 0 0 0.202222 0 0.674074L0.00726249 0.746667C0.00726249 0.746667 4.38147 3.97185 4.84893 4.14815C5.34278 3.94333 9.68333 0.674074 9.68333 0.674074L9.67631 0.64063Z"
              fill="#F1F3F5"
            />
          </svg>
        </div>
        <div className={classes.contactInfo}>
          <Text size="sm" weight="400" sx={{ color: "#F1F3F5" }}>
            Email
          </Text>
          <Text size="md" weight="500" sx={{ color: "#F1F3F5" }}>
            lezordonez@gmail.com
          </Text>
        </div>
      </Group>
      <Group>
        <div className={props.className}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0395 8.36127L10.0395 8.35906C10.0395 8.35906 8.11548 6.43731 8.11429 6.43637C7.96175 6.28375 7.71779 6.28706 7.56771 6.43739L6.6821 7.32663C6.3378 7.671 5.89385 7.36542 5.04168 6.67057C4.47787 6.21084 3.82917 5.59264 3.26671 4.89566C2.872 4.40665 2.52294 3.89311 2.88354 3.53261C2.88447 3.53167 3.7728 2.64566 3.77263 2.64473L3.77331 2.64286C3.93273 2.48345 3.91728 2.23924 3.7717 2.0935L3.7717 2.09129C3.7717 2.09129 1.79208 0.114195 1.79097 0.113007C1.63843 -0.0395283 1.39456 -0.0361329 1.24439 0.114025L0.352244 1.00615C-0.015312 1.46613 -0.832169 3.6584 2.6698 7.24794C6.35894 11.0296 8.73947 10.2206 9.1493 9.79393C9.1493 9.79393 10.0405 8.91326 10.0405 8.91242L10.0413 8.91063C10.2007 8.75114 10.185 8.5071 10.0395 8.36127V8.36127Z"
              fill="#F1F3F5"
            />
          </svg>
        </div>
        <div className={classes.contactInfo}>
          <Text size="sm" weight="400" sx={{ color: "#F1F3F5" }}>
            Phone
          </Text>
          <Text size="md" weight="500" sx={{ color: "#F1F3F5" }}>
            702-608-0278
          </Text>
        </div>
      </Group>
      <Group>
        <div className={props.className}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.42798 8.42989L6.96258 8.42989L6.96258 6.13539C6.96258 5.58779 6.95101 4.88401 6.19903 4.88401C5.43548 4.88401 5.31786 5.47981 5.31786 6.0949L5.31786 8.42989L3.85246 8.42989L3.85246 3.70977L5.26002 3.70977L5.26002 4.35377H5.2793C5.47597 3.98357 5.95415 3.59215 6.66757 3.59215C8.15225 3.59215 8.42605 4.56973 8.42605 5.84038L8.42798 8.42989ZM2.20003 3.06384C1.72763 3.06384 1.34971 2.68206 1.34971 2.21352C1.34971 1.74498 1.72956 1.36321 2.20003 1.36321C2.6705 1.36321 3.05035 1.74498 3.05035 2.21352C3.05035 2.68206 2.66857 3.06384 2.20003 3.06384ZM2.93466 8.42989L1.4654 8.42989L1.4654 3.70977L2.93466 3.70977L2.93466 8.42989ZM9.16068 0L0.730772 0C0.327787 0 0 0.318145 0 0.713417L0 9.17801C0 9.57136 0.325859 9.89143 0.730772 9.89143L9.15875 9.89143C9.56174 9.89143 9.89145 9.57329 9.89145 9.17801L9.89145 0.713417C9.89145 0.318145 9.56174 0 9.16068 0Z"
              fill="#F1F3F5"
            />
          </svg>
        </div>
        <div className={classes.contactInfo}>
          <Text size="sm" weight="400" sx={{ color: "#F1F3F5" }}>
            LinkedIn
          </Text>
          <Text size="md" weight="500" sx={{ color: "#F1F3F5" }}>
            /leslie-ordonez
          </Text>
        </div>
      </Group>
      <Group>
        <div className={props.className}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.1713 3.18728e-06C4.70626 -0.00148584 3.28858 0.518801 2.1723 1.46763C1.05602 2.41645 0.31412 3.73179 0.0795496 5.17793C-0.155021 6.62407 0.133071 8.10648 0.892199 9.3595C1.65133 10.6125 2.83187 11.5543 4.22226 12.0159C4.5326 12.0727 4.64235 11.8797 4.64235 11.717C4.64235 11.5542 4.64235 11.1833 4.64235 10.6686C2.92038 11.0433 2.55706 9.83982 2.55706 9.83982C2.44283 9.46682 2.20013 9.14637 1.87206 8.93531C1.31573 8.55686 1.91748 8.55686 1.91748 8.55686C2.11249 8.58441 2.29868 8.65597 2.46195 8.76612C2.62522 8.87628 2.76128 9.02214 2.85983 9.19266C2.94356 9.3445 3.05646 9.4783 3.19203 9.5864C3.32761 9.6945 3.4832 9.77476 3.64987 9.82258C3.81654 9.8704 3.99101 9.88484 4.16327 9.86507C4.33554 9.8453 4.5022 9.7917 4.6537 9.70736C4.67745 9.39602 4.81167 9.10342 5.03216 8.88233C3.66215 8.72716 2.22402 8.19733 2.22402 5.85469C2.21462 5.24273 2.44091 4.65058 2.85604 4.20085C2.67115 3.66875 2.69276 3.08663 2.91659 2.56971C2.91659 2.56971 3.43508 2.40319 4.61207 3.20173C5.62277 2.92423 6.68956 2.92423 7.70026 3.20173C8.87725 2.40319 9.39195 2.56971 9.39195 2.56971C9.6189 3.08116 9.64591 3.65911 9.46764 4.18949C9.88278 4.63922 10.1091 5.23137 10.0997 5.84334C10.0997 8.21247 8.65775 8.73095 7.28396 8.87098C7.43127 9.01906 7.54502 9.19707 7.6175 9.39296C7.68998 9.58886 7.71949 9.79804 7.70404 10.0063C7.70404 10.8314 7.70404 11.4975 7.70404 11.698C7.70404 11.8986 7.8138 12.0538 8.12791 11.9932C9.50248 11.5194 10.6653 10.575 11.4111 9.32681C12.1568 8.07867 12.4374 6.60712 12.2033 5.17215C11.9692 3.73717 11.2354 2.43111 10.1317 1.48469C9.02792 0.538275 7.6252 0.0124124 6.1713 3.18728e-06V3.18728e-06Z"
              fill="#F1F3F5"
            />
          </svg>
        </div>
        <div className={classes.contactInfo}>
          <Text size="sm" weight="400" sx={{ color: "#F1F3F5" }}>
            GitHub
          </Text>
          <Text size="md" weight="500" sx={{ color: "#F1F3F5" }}>
            /ordonutz
          </Text>
        </div>
      </Group>
    </Stack>
  );
};

export default ContactIcons;
