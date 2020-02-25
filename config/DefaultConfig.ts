import { themes, ThemeKey } from "./themes";

export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
  modalBackgroundColor: string,
  warningColor: string;
}

export interface AppDateFormats {
  chatDateFormat: string,
  chatHourDisplayFormat: string,
  chatYesterdayText: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    dateFormats?: AppDateFormats,
    searchPlacerHolder: string,
    messagePlacerHolder: string,
    chatTitle: string,
    appLogo: string,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      searchPlacerHolder: "Search Chats",
      messagePlacerHolder: "Type Text here for message...",
      chatTitle: "Chats",
      appLogo: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png"
    }
}
