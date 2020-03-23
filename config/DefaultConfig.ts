import { themes, ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

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
  errorColor: string;
  appColor: string;
}

export interface AppDateFormats {
  chatDateFormat: string,
  chatHourDisplayFormat: string,
  chatYesterdayText: string,
}

export interface loginValidation {
  username: string,
  password: string,
  passwordLength: string,
}

export interface signupValidation {
  name: string,
  username: string,
  email: string,
  validEmail: string,
  password: string,
  passwordLength: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    selectedLanguage: LanguageKey,
    dateFormats?: AppDateFormats,
    searchPlacerHolder: string,
    messagePlacerHolder: string,
    namePlaceholder: string,
    usernamePlacerHolder: string,
    emailPlacerHolder: string,
    passwordPlacerHolder: string,
    signupCheck: string;
    loginButton: string;
    logoutButton: string;
    signupButton: string;
    chatTitle: string,
    appName: string,
    appLogo: any,
    blockButton: string,
    reportButton: string,
    deleteButton: string,
    loginValidation: loginValidation,
    signupValidation: signupValidation,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.english,
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      searchPlacerHolder: "Search Chats",
      messagePlacerHolder: "Type Text here for message...",
      namePlaceholder: "Full Name",
      usernamePlacerHolder: "Username",
      emailPlacerHolder: "Email",
      passwordPlacerHolder: "Password",
      loginButton: "Login",
      logoutButton: "Logout",
      signupButton: "Sign up",
      signupCheck: "If you don't have an account",
      chatTitle: "Chats",
      appName: "Recraft Chat App",
      appLogo: require("../app-logo.png"),
      blockButton: "Block",
      reportButton: "Report",
      deleteButton: "Delete Conversation",
      loginValidation : {
        username: `Username is required`,
        password: `Password is required`,
        passwordLength: 'Password length between 6 and 12',
      },
      signupValidation : {
        name: `Full Name is required`,
        username: `Username is required`,
        email: `Email is required`,
        validEmail: 'Please enter a valid email',
        password: `Password is required`,
        passwordLength: 'Password length between 6 and 12',
      },
    }
}
