import { ThemeIcon, Text, Group, Stack } from "@mantine/core";
import React from "react";
import GitIcon from "../../../../assets/GitIcon";
import LinkedIcon from "../../../../assets/LinkedIcon";
import MailIcon from "../../../../assets/MailIcon";
import PhoneIcon from "../../../../assets/PhoneIcon";

type Props = {};

const ContactIcons = (props: Props) => {
  return (
    <Stack>
      <Group>
        <MailIcon />
        <Text>Email</Text>
        <Text>lezordonez@gmail.com</Text>
      </Group>
      <Group>
        <PhoneIcon />
        <Text>Phone</Text>
        <Text>702-608-0278</Text>
      </Group>
      <Group>
        <LinkedIcon />
        <GitIcon />
      </Group>
    </Stack>
  );
};

export default ContactIcons;
