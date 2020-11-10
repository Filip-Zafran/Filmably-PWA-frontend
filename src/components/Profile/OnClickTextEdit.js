import React from 'react';

const Test = () => {
	// Use state to store value of text input.
	const [ value, setValue ] = React.useState('test text' /* initial value */);

	// Use state to store whether component is in edit mode or not.
	const [ editMode, setEditMode ] = React.useState(false /* initial value */);

	// Create function to handle toggling edit mode.
	// useCallback will only generate a new function when setEditMode changes
	const toggleEditMode = React.useCallback(
		() => {
			// toggle value using setEditMode (provided by useState)
			setEditMode((currentValue) => !currentValue);
		},
		[ setEditMode ] /* <- dependency array - determines when function recreated */
	);

	// Create function to handle change of textbox value.
	// useCallback will only generate a new function when setValue changes
	const updateValue = React.useCallback(
		(e) => {
			// set new value using setValue (provided by useState)
			setValue(e.target.value);
		},
		[ setValue ] /* <- dependency array - determines when function recreated */
	);

	// NOTE: All hooks must run all the time a hook cannot come after an early return condition.
	// i.e. In this component all hooks must be before the editMode if condition.
	// This is because hooks rely on the order of execution to work and if you are removing
	// and adding hooks in subsequent renders (which react can't track fully) then you will
	// get warnings / errors.

	// Do edit mode render
	if (editMode) {
		return (
			// I changed the component to controlled can be left as uncontrolled if prefered.
			<input type="text" autoFocus value={value} onChange={updateValue} onBlur={toggleEditMode} />
		);
	}

	// Do non-edit mode render.
	return <div onClick={toggleEditMode}>{value}</div>;
};

export default Test;
