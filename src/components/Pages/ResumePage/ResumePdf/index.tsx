import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { resumeData, resumeSectionData, resumeSubSection } from "..";
import { List } from "@mantine/core";

type Props = {};

// Create styles
const styles = StyleSheet.create({
  body: {
    display: "flex",
    margin: "8px",
    backgroundColor: "#f3f3f3",
    maxWidth: "576pt",
    padding: "18pt 18pt 18pt 18pt",
  },
  section: {
    fontSize: "12",
  },
  viewSection: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const getSubSectionData = (section: resumeSubSection) => {
  return (
    <>
      <Text style={styles.section}>{section.name}</Text>
      <Text style={styles.section}>{section.date}</Text>
      {section.description.map((info) => (
        <Text style={styles.section}>
          {info} <br />
        </Text>
      ))}
    </>
  );
};

const getSectionData = (section: resumeSectionData) => {
  return (
    <>
      <Text style={styles.section}>
        {section.title} <br />
      </Text>
      {getSubSectionData(section.subsection0)}
      {section.subsection1 != undefined &&
        getSubSectionData(section.subsection1)}
      {section.subsection2 != undefined &&
        getSubSectionData(section.subsection2)}
    </>
  );
};

const ResumePdf = (props: Props) => {
  const dataCopy = JSON.parse(JSON.stringify(resumeData));

  const page = dataCopy.map((section: resumeSectionData) => (
    <>{getSectionData(section)}</>
  ));
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.viewSection}>{page}</View>
      </Page>
    </Document>
  );
};

export default ResumePdf;
