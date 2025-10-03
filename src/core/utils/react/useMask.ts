const useMask = () => {
  let oldValue: string, oldCursor: number;

  const regex = new RegExp(/^\d*$/g);
  //   const regex = new RegExp(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM|am|pm)$/g);

  const mask = (value: string) => {
    const output: string[] = [];
    for (let i = 0; i < value.length; i++) {
      if (i !== 0 && i % 2 === 0) {
        output.push(':'); // add the separator
      }
      output.push(value[i]);
    }
    return output.join('');
  };

  const unmask = (value: string) => value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character

  const checkSeparator = (position: number, interval: number) => Math.floor(position / (interval + 1));

  const onKeyDown = (props: React.KeyboardEvent<HTMLInputElement>) => {
    const { currentTarget: target } = props;
    oldValue = target.value;
    oldCursor = target.selectionEnd ?? 0;
  };

  const onInput = (e: any) => {
    const el = e.currentTarget;

    let newCursorPosition,
      newValue = unmask(el.value);

    if (newValue.match(regex)) {
      newValue = mask(newValue);

      newCursorPosition =
        oldCursor -
        checkSeparator(oldCursor, 4) +
        checkSeparator(oldCursor + (newValue.length - oldValue.length), 4) +
        (unmask(newValue).length - unmask(oldValue).length);

      if (newValue !== '') {
        el.value = newValue;
      } else {
        el.value = '';
      }
    } else {
      el.value = oldValue;
      newCursorPosition = oldCursor;
    }
    el.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  return { onKeyDown, onInput };
};

export default useMask;
