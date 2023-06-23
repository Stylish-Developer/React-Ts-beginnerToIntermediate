// we can reuse this type for anywhere in this application
export interface names {
  name: string;
  age: number;
}

export interface name {
  firstName: string;
  lastName: string;
}

export interface BasicTypesProps {
  notification: number;
  isLoggedIn: boolean | null;
  name: name;
  names: names[];
}

export interface StyleProps {
  display: string;
  justifyContent: string;
  alignItems: string;
  height: string;
}
