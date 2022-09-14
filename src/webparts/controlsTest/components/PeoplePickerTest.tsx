import * as React from 'react';

import {PeoplePicker, PrincipalType} from "../../../controls/peoplepicker";
import {WebPartContext} from "@microsoft/sp-webpart-base";
import {DynamicForm} from "../../../controls/dynamicForm";

export interface PeoplePickerTestProps {
  context: WebPartContext;
}

const PeoplePickerTest = (props: PeoplePickerTestProps) => {
  return (<DynamicForm
    context={props.context}
    listId={"4259e2de-3a53-4db6-b66a-d387b2e373a2"}
  />)
};

export default PeoplePickerTest;
