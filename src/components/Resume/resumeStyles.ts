import { StyleSheet } from "@react-pdf/renderer";

export const resumeStyles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1.6,
  },
  headerContainer: {
    backgroundColor: "#f59f00",
    padding: 30,
    textAlign: "center",
  },
  main: { display: "flex", flexDirection: "row", flex: 1 },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "33%",
    backgroundColor: "#fff4e6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  listWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f59f00",
    borderBottomStyle: "solid",
    paddingBottom: 6,
    marginBottom: 2,
  },
  rowTitle: {
    fontSize: 18,
    letterSpacing: 1.4,
    color: "#f59f00",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    fontSize: 8,
    color: "#333",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: "77%",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  link: { color: "#339af0" },
});
