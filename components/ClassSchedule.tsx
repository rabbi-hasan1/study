import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

interface ClassItem {
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
  accent: string; // left bar + tint base colour
  tint: string; // card background
}

const COLORS = {
  background: "#F7F8FA",
  surface: "#FFFFFF",
  text: "#14213D",
  muted: "#6B7280",
  line: "#E3E6EC",
  now: "#22396F",
};

const CLASSES: ClassItem[] = [
  {
    startTime: "08:00 AM",
    endTime: "08:45 AM",
    subject: "Web Design",
    teacher: "Rabbi Hasan",
    room: "Room 305",
    accent: "#E9A15B",
    tint: "#FFF4E6",
  },
  {
    startTime: "08:45 AM",
    endTime: "09:30 AM",
    subject: "Microprocessor",
    teacher: "Sakib Hasan",
    room: "Room 201",
    accent: "#7F8C6A",
    tint: "#F0F3EA",
  },
  {
    startTime: "09:30 AM",
    endTime: "10:15 AM",
    subject: "Networking",
    teacher: "Tamim Hasan",
    room: "Room 301",
    accent: "#D98A8A",
    tint: "#FDEFEF",
  },
  {
    startTime: "10:15 AM",
    endTime: "11:00 AM",
    subject: "Java Programming",
    teacher: "Abdul Hakim",
    room: "Room 304",
    accent: "#22396F",
    tint: "#E8ECF6",
  },
  {
    startTime: "11:45 AM",
    endTime: "12:35 PM",
    subject: "Database",
    teacher: "Rabbi Hasan",
    room: "Room 301",
    accent: "#B07BAC",
    tint: "#F6EEF6",
  },
];

function ClassRow({ item, isLast }: { item: ClassItem; isLast: boolean }) {
  return (
    <View style={styles.row}>
      <View style={styles.timeColumn}>
        <Text style={styles.startTime}>{item.startTime}</Text>
        <Text style={styles.endTime}>{item.endTime}</Text>
      </View>

      <View style={styles.markerColumn}>
        <View style={[styles.dot, { borderColor: item.accent }]} />
        {!isLast && <View style={styles.connector} />}
      </View>

      <View style={[styles.card, { backgroundColor: item.tint }]}>
        <View style={[styles.cardAccent, { backgroundColor: item.accent }]} />
        <View style={styles.cardBody}>
          <Text style={styles.subject} numberOfLines={1}>
            {item.subject}
          </Text>
          <Text style={styles.teacher}>{item.teacher}</Text>
          <View style={styles.roomBadge}>
            <Text style={styles.roomText}>{item.room}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ClassSchedule() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Today's classes</Text>
            <Text style={styles.subtitle}>
              {CLASSES.length} classes scheduled
            </Text>
          </View>
          <View style={styles.datePill}>
            <Text style={styles.dateText}>Jan 1, 2026</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Timeline</Text>

        {CLASSES.map((item, index) => (
          <ClassRow
            key={`${item.startTime}-${item.subject}`}
            item={item}
            isLast={index === CLASSES.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.text,
    letterSpacing: -0.3,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: COLORS.muted,
  },
  datePill: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.text,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 4,
  },
  timeColumn: {
    width: 72,
    paddingTop: 12,
  },
  startTime: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.text,
  },
  endTime: {
    marginTop: 2,
    fontSize: 12,
    color: COLORS.muted,
  },

  markerColumn: {
    width: 24,
    alignItems: "center",
    paddingTop: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 3,
    backgroundColor: COLORS.surface,
  },
  connector: {
    flex: 1,
    width: 2,
    marginTop: 4,
    backgroundColor: COLORS.line,
  },

  card: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 14,
  },
  cardAccent: {
    width: 4,
  },
  cardBody: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  subject: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },
  teacher: {
    marginTop: 3,
    fontSize: 14,
    color: COLORS.muted,
  },
  roomBadge: {
    alignSelf: "flex-start",
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  roomText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.text,
  },
});

export default ClassSchedule;
