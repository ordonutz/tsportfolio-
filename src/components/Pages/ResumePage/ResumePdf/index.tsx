import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

type Props = {};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResumePdf = (props: Props) => {
  return (
    <Document>
      <Page>
        <Text>Section #1</Text>

        <Text>
          Section #2 once upon a time they hired me at google and it was awesome
          i got to work front end for youtube
        </Text>
      </Page>
    </Document>
  );
};

export default ResumePdf;

{
  /* <Document>
  <Page>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
    <View style={styles.section}>
      <Text>Section #2</Text>
    </View>
  </Page>
</Document>; */
}
