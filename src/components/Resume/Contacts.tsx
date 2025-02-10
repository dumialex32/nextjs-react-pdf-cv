import { View, Text } from "@react-pdf/renderer";
import { useResumeContext } from "./useResumeContext";
import { resumeStyles } from "./resumeStyles";

const Contacts = () => {
  const { contacts } = useResumeContext();
  return (
    <View style={resumeStyles.row}>
      <Text style={resumeStyles.rowTitle}>Contatti</Text>
      <View style={resumeStyles.list}>
        <Text>{contacts.name}</Text>
        <Text style={resumeStyles.link}>{contacts.email}</Text>
        <Text>{contacts.phoneNumber}</Text>
        <Text>{contacts.residence}</Text>
        <Text style={resumeStyles.link}>{contacts.websites.github}</Text>
      </View>
    </View>
  );
};

export default Contacts;
