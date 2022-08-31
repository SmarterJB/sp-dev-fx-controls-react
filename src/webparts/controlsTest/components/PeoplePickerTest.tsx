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
    listId={"d80d1af9-7ecd-46ec-9aff-e8fd888c8bc4"}
    listItemId={15}
  />)
};

export default PeoplePickerTest;
