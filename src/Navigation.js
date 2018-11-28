import { createDrawerNavigator } from "react-navigation";
import {
  AccountList,
  ContactUs,
  AccountDetails,
  BranchLocator,
  TransferMoney,
  ConfirmTransfer
} from "./screens";

export default createDrawerNavigator({
  Accounts: AccountList,
  "Transfer Money": TransferMoney,
  AccountDetails,
  ConfirmTransfer,
  "Contact Us": ContactUs,
  "Find a Location": BranchLocator
});
