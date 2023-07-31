import * as kb from "@kobalte/core";
import { createSignal, type JSXElement } from "solid-js";

const optionValues = ["foo", "bar", "baz"];

export default function Main() {
  const [value, setValue] = createSignal<string | null>(null, {
    name: "select value",
    equals: false,
  });

  return (
    <>
      <Select
        label="First"
        value={value}
        setValue={setValue}
        options={optionValues}
      />
      <Select
        label="Second"
        value={value}
        setValue={setValue}
        options={optionValues}
      />
      <div class="row">
        <kb.Button.Root
          class="active text-pad rounded shadow center"
          onClick={() => setValue(null)}
        >
          Clear Value
        </kb.Button.Root>
        <div class="text-pad">value: {value()}</div>
      </div>
    </>
  );
}

interface SelectProps {
  label: JSXElement;
  options: string[];
  value: () => string | null;
  setValue: (value: string | null) => void;
}

function Select(props: SelectProps) {
  return (
    <kb.Select.Root<string | null>
      class="row"
      options={props.options}
      value={props.value()}
      onChange={props.setValue}
      placeholder="empty"
      itemComponent={Item}
    >
      <kb.Select.Label class="text-pad">{props.label}</kb.Select.Label>
      <kb.Select.HiddenSelect />
      <kb.Select.Trigger class="row active rounded inset-shadow">
        <kb.Select.Value<string> class="flex text-pad placeholder-opacity">
          {(props) => props.selectedOption()}
        </kb.Select.Value>
        <kb.Select.Icon class="text-pad" />
      </kb.Select.Trigger>
      <kb.Select.Portal>
        <kb.Select.Content class="column rounded clip shadow-lg">
          <kb.Select.Listbox class="column" />
        </kb.Select.Content>
      </kb.Select.Portal>
    </kb.Select.Root>
  );
}

interface ItemProps {
  item: kb.CollectionNode<string | null>;
}

function Item(props: ItemProps) {
  return (
    <kb.Select.Item class="active text-pad" item={props.item}>
      {props.item.rawValue}
    </kb.Select.Item>
  );
}
