import { createDrawerNavigator } from "react-navigation";
import {
  AccountList,
  ContactUs,
  AccountDetails,
  BranchLocator
} from "./screens";

export default createDrawerNavigator({
  Accounts: AccountList,
  AccountDetails,
  "Contact Us": ContactUs,
  "Locate a Branch": BranchLocator
});
