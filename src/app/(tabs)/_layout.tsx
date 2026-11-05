import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const BLUE = "#1877F2";
const GRAY = "#65676B";

const tabs = [
  { name: "index", title: "Home", icon: "home-outline", activeIcon: "home" },

  {
    name: "routine",
    title: "Routine",
    icon: "calendar-number-outline",
    activeIcon: "calendar-number",
  },
  {
    name: "task",
    title: "Task",
    icon: "add-circle-outline",
    activeIcon: "add-circle",
  },

  {
    name: "friends",
    title: "Friends",
    icon: "people-outline",
    activeIcon: "people",
  },
  {
    name: "notifications",
    title: "Notifications",
    icon: "notifications-outline",
    activeIcon: "notifications",
  },
];

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: BLUE,
          tabBarInactiveTintColor: GRAY,
          animation: "shift",
          headerPressColor: "#0a3296",

          tabBarStyle: {
            height: 42,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#E4E6EB",
            paddingTop: 5,
            paddingBottom: 5,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarBadge: tab.name === "notifications" ? 3 : undefined,
              tabBarIcon: ({ focused, color }) => (
                <View style={{ alignItems: "center" }}>
                  <Ionicons
                    name={(focused ? tab.activeIcon : tab.icon) as any}
                    size={27}
                    color={color}
                  />
                </View>
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
