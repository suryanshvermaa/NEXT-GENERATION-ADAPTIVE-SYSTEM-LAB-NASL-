export const ROLES: Record<string, string> = {
  ADMIN: "ADMIN",
  USER: "USER"
};

export const PERMISSIONS: Record<string, string> = {
  CREATE_USER: "CREATE_USER",
  FETCH_PROFILE: "FETCH_PROFILE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  DELETE_USER: "DELETE_USER"
};

export const ROLE_ACCESS: Record<string, string[]> = {
  ADMIN: [
    // user route permissions
    "FETCH_PROFILE",
    "UPDATE_PROFILE",
    "DELETE_USER",
    "CREATE_USER"
  ],
  USER:[
    // user route permissions
    "FETCH_PROFILE",
    "UPDATE_PROFILE"
  ]
};
