export enum Directions {
  RTL = "rtl",
  LTR = "ltr",
}

export enum Languages {
  ENGLISH = "en",
  ARABIC = "ar",
}


export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },

  PROFILE: "/profile",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  FAVORITES: "/favorites",
  ORDERS: "/orders",

  ADMIN: {
    DASHBOARD: "/admin",
    USERS: "/admin/users",
    PRODUCTS: "/admin/products",
    ORDERS: "/admin/orders",
    SETTINGS: "/admin/settings",
    ANALYTICS: "/admin/analytics",
  },
} as const;

export const Pages = {
  LOGIN: Routes.AUTH.LOGIN,
  REGISTER: Routes.AUTH.REGISTER,
  PROFILE: Routes.PROFILE,
  HOME: Routes.HOME,
} as const;

export const Redirects = {
  AFTER_LOGIN: Routes.PROFILE,
  AFTER_LOGOUT: Routes.HOME,
  UNAUTHORIZED: Routes.HOME,
  LOGIN_PAGE: Routes.AUTH.LOGIN,
} as const;

export const RouteGroups = {
  protected: [
    Routes.PROFILE,
    Routes.DASHBOARD,
    Routes.SETTINGS,
    Routes.FAVORITES,
    Routes.ORDERS,
  ],

  admin: Object.values(Routes.ADMIN),

  auth: Object.values(Routes.AUTH),

  public: [
    Routes.HOME,
    Routes.ABOUT,
    Routes.CONTACT,
  ],
} as const;

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME_LOCAL = "datetime-local",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",
  COLOR = "color",
  RANGE = "range",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  MONTH = "month",
  WEEK = "week",
  HIDDEN = "hidden",
  MULTI_SELECT = "multi select",
}

export enum Navigate {
  NEXT = "next",
  PREV = "prev",
}
export enum Responses {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortBy {
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  STATUS = "status",
  START_DATE = "startDate",
  END_DATE = "endDate",
}

export enum AuthMessages {
  LOGIN_SUCCESS = "Login successfully",
  LOGOUT_SUCCESS = "Logout successfully",
  REGISTER_SUCCESS = "Register successfully",
  FORGET_PASSWORD_SUCCESS = "Forget password successfully",
  RESET_PASSWORD_SUCCESS = "Reset password successfully",
}

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum Environments {
  PROD = "production",
  DEV = "development",
}
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}